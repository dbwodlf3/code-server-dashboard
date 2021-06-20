window.addEventListener('load', ()=>{
    /**
     * @param {HTMLElement} target 
     * @param {'type1' | 'type2' | 'type3'} type 
     * @param {string} name 
     * @param {'on'|'off'} status
     * @param {string} date
    */
    const createItem = (target, type, name, status, date, link)=>{
        let status_html = '';

        switch(status) {
            case 'on':
                status_html = `
                    <div class="status">
                        <div class="icon"> </div>
                        <div class="text"> On Track </div>
                    </div>`;
                break;
            case 'off':
                status_html = `
                    <div class="status">
                        <div class="icon off"> </div>
                        <div class="text"> Off Track </div>
                    </div>
                `;
                break;
        }

        const html_string = (()=>{
            return `
                <li class="item ${type}">
                    <div class="task">
                    <a href=${link}><div class="icon"> </div></a>
                    <div class="name" style="width:150px"> ${name} </div>
                    </div>
        
                    ${status_html}
            
                    <div class="progress">
                    <progress value="100" max="100" />
                    </div>
            
                    <div class="dates">
                    <div class="bar"> ${date} </div>
                    </div>
            
                    <div class="priority">
                    <div class="bar"> </div>
                    </div>
            
                    <div class="user">
                    <!-- 
                        <img src="https://source.unsplash.com/40x40/?indian" alt="Image 001" class="owner-img" />
                    -->
                    </div>
                </li>
            `
        })();

        target.appendChild(createElementFromHTML(html_string))
    }

    // Helpers
    function makeRequest(method, url, data){
        return new Promise( (resolve, reject)=>{
            const request = new XMLHttpRequest();
    
            request.open(method, url);
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(JSON.stringify(data));
    
            request.onload = ()=>{
                if (request.status >= 200 && request.status < 300) {
                    resolve(request.response);
                } else {
                    reject({
                        "status": request.status,
                        "statusText": request.statusText
                    })
                }
            }
        })
    }

    function createElementFromHTML(htmlString) {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();
    
        // Change this to div.childNodes to support multiple top-level nodes
        return div.firstChild; 
    }

    function makeControlResult(responseData){
        const result = JSON.parse(responseData)
        return result;
    }

    /**
     * @typedef {Object} ControlResult
     * @property {boolean} fail 
     * @property {string?} msg
     * @property {Object?} data
     * @property {number?} errno
    */

    /**
     * @param {Object} apiObject
     * @param {string} apiObject.url
     * @param {Object} apiObject.data
     * @returns {Promise<ControlResult>} number
    */
    function sendAPI(apiObject){
        return new Promise( (resolve, reject)=>{
            makeRequest('post', apiObject.url, apiObject.data)
                .then( (response)=>{
                    resolve(makeControlResult(response));
                })
                .catch( (err)=>{
                    reject(err);
                })
        })
   }

    // Main Process...
    const item_container = document.getElementById('BoardContainer');
    const url = window.location.pathname

    if(/\/admin\/user\/dashboard/.test(url)){
        const item1 = createItem(item_container, "type1", "사용자1", "on", "2021-06-20", '#');
    }
    else if(/\/admin\/container\/dashboard/.test(url)){
        const item1 = createItem(item_container, "type1", "사용자1", "on", "2021-06-20", '#');
    }
    else if(/\/user\/container/.test(url)){
        // get container list
        const msg = {
            url: '/admin/api/getContainers'
        }

        sendAPI(msg).then((containers)=>{
            for(const container of containers) {
                createItem(item_container, "type1", container.name, "on",
                    container.createDate, `/code-server/${container.id}`)
            }
        })
    }
})
