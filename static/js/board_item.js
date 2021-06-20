window.addEventListener('load', ()=>{
    /**
     * @param {HTMLElement} target 
     * @param {'type1' | 'type2' | 'type3'} type 
     * @param {string} name 
     * @param {'on'|'off'} status
     * @param {string} date
    */
    const createItem = (target, type, name, status, date)=>{
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
                    <div class="icon"> </div>
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

    const item_container = document.getElementById('BoardContainer');
    const item1 = createItem(item_container, "type1", "테스트", "on", "2021-06-20");
    // const item2
    // const item3
    // const imte4
    // const item5

    // Helpers
    function createElementFromHTML(htmlString) {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();
    
        // Change this to div.childNodes to support multiple top-level nodes
        return div.firstChild; 
    }
})