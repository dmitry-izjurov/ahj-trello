export const page = `
<div class="wrapper">
    <div class="wrapper__block">
      <div class="block__header">
        <header class="header">todo</header>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#134563">
          <path fill-rule="evenodd" d="M7,12 C7,13.1045695 6.1045695,14 5,14 C3.8954305,14 3,13.1045695 3,12 C3,10.8954305 3.8954305,10 5,10 C6.1045695,10 7,10.8954305 7,12 Z M21,12 C21,13.1045695 20.1045695,14 19,14 C17.8954305,14 17,13.1045695 17,12 C17,10.8954305 17.8954305,10 19,10 C20.1045695,10 21,10.8954305 21,12 Z M14,12 C14,13.1045695 13.1045695,14 12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 Z"/>
        </svg>  
      </div>
      <div class="wrapper__box-text">
        <div class="block__text">
          <p class="text">Welcome to Trello!</p>
        </div>
      </div>
      <div class="wrapper__box-text">
        <div class="block__text">
          <p class="text">This is a card.</p>
          <div class="block__footer">
            <div class="block__icon">
              <svg class="icon" fill="#134563" style="enable-background:new 0 0 64 64;" version="1.1" viewBox="0 0 64 64" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">
              </style><g><g id="Icon-Like" transform="translate(78.000000, 528.000000)"><path class="st0" d="M-22-495.6c0-3.2-2.5-4.9-6-4.9h-10.1c0.7-2.7,1.1-5.3,1.1-7.5c0-8.7-2.4-10.5-4.5-10.5     c-1.4,0-2.4,0.1-3.8,1c-0.4,0.2-0.6,0.6-0.7,1l-1.5,8.1c-1.6,4.3-5.7,8-9,10.5v21.4c1.1,0,2.5,0.6,3.8,1.3     c1.6,0.8,3.3,1.6,5.2,1.6h14.3c3,0,5.2-2.4,5.2-4.5c0-0.4,0-0.8-0.1-1.1c1.9-0.7,3.1-2.3,3.1-4.1c0-0.9-0.2-1.7-0.5-2.3     c1.1-0.8,2.3-2.1,2.3-3.7c0-0.8-0.4-1.8-1-2.5C-22.9-492.8-22-494.2-22-495.6L-22-495.6z M-25.1-495.6c0,1.9-2,2.1-2.3,3     c-0.3,1,1.2,1.4,1.2,3.2c0,1.9-2.3,1.9-2.6,2.8c-0.4,1.1,0.7,1.5,0.7,3.3c0,0.1,0,0.2,0,0.3c-0.3,1.5-2.6,1.6-3,2.2     c-0.4,0.7,0.1,1.1,0.1,2.7c0,0.9-1,1.5-2.2,1.5h-14.3c-1.1,0-2.5-0.6-3.8-1.3c-1.2-0.6-2.4-1.2-3.7-1.5v-15.9     c3.7-2.8,8.5-7.1,10.4-12.3c0-0.1,0-0.2,0.1-0.2l1.4-7.5c0.5-0.2,0.9-0.2,1.7-0.2c0.3,0,1.5,1.8,1.5,7.5c0,2.2-0.4,4.7-1.2,7.5     h-0.4c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5H-28C-26.5-497.5-25.1-496.8-25.1-495.6L-25.1-495.6z" id="Fill-4_2_"/><path class="st0" d="M-58-473.5h-9c-1.7,0-3-1.3-3-3v-21c0-1.7,1.3-3,3-3h9c1.7,0,3,1.3,3,3v21     C-55-474.8-56.3-473.5-58-473.5L-58-473.5z M-67-497.5v21h9l0-21H-67L-67-497.5z M-70-518.5" id="Fill-6_2_"/></g></g></svg>
              <span>1</span>
            </div>
            <div class="block__icon">
              <svg class="icon" fill="#134563" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 24 24" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Icon"><path d="M20.75,7c0,-2.623 -2.127,-4.75 -4.75,-4.75c-2.443,0 -5.557,0 -8,0c-2.623,0 -4.75,2.127 -4.75,4.75c0,2.977 0,7.023 0,10c-0,2.623 2.127,4.75 4.75,4.75c2.443,0 5.557,0 8,0c2.623,-0 4.75,-2.127 4.75,-4.75l-0,-10Zm-1.5,0l0,10c0,1.795 -1.455,3.25 -3.25,3.25c-2.443,0 -5.557,0 -8,-0c-1.795,-0 -3.25,-1.455 -3.25,-3.25c0,-2.977 0,-7.023 -0,-10c-0,-1.795 1.455,-3.25 3.25,-3.25c2.443,0 5.557,0 8,0c1.795,0 3.25,1.455 3.25,3.25Z"/><path d="M8.995,9.25l6,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-6,-0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z"/><path d="M9,12.75l6,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-6,0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z"/><path d="M9,16.25l3,0c0.414,-0 0.75,-0.336 0.75,-0.75c-0,-0.414 -0.336,-0.75 -0.75,-0.75l-3,0c-0.414,-0 -0.75,0.336 -0.75,0.75c-0,0.414 0.336,0.75 0.75,0.75Z"/></g></svg>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper__box-text">
        <div class="block__text">
          <p class="text">Click on a card to see what's behind it</p>
          <div class="block__footer">
            <div class="block__icon">
              <svg class="icon" fill="#134563" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 24 24" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Icon"><path d="M20.75,7c0,-2.623 -2.127,-4.75 -4.75,-4.75c-2.443,0 -5.557,0 -8,0c-2.623,0 -4.75,2.127 -4.75,4.75c0,2.977 0,7.023 0,10c-0,2.623 2.127,4.75 4.75,4.75c2.443,0 5.557,0 8,0c2.623,-0 4.75,-2.127 4.75,-4.75l-0,-10Zm-1.5,0l0,10c0,1.795 -1.455,3.25 -3.25,3.25c-2.443,0 -5.557,0 -8,-0c-1.795,-0 -3.25,-1.455 -3.25,-3.25c0,-2.977 0,-7.023 -0,-10c-0,-1.795 1.455,-3.25 3.25,-3.25c2.443,0 5.557,0 8,0c1.795,0 3.25,1.455 3.25,3.25Z"/><path d="M8.995,9.25l6,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-6,-0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z"/><path d="M9,12.75l6,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-6,0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z"/><path d="M9,16.25l3,0c0.414,-0 0.75,-0.336 0.75,-0.75c-0,-0.414 -0.336,-0.75 -0.75,-0.75l-3,0c-0.414,-0 -0.75,0.336 -0.75,0.75c-0,0.414 0.336,0.75 0.75,0.75Z"/></g></svg>
            </div>
            <div class="block__icon">
              <svg class="icon" fill="#134563" id="Layer_1" style="enable-background:new 0 0 64 64;" version="1.1" viewBox="0 0 64 64" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">
              </style><g><g id="Icon-Comment" transform="translate(328.000000, 480.000000)"><path class="st0" d="M-310-425.6h-2.5l1.5-2.1c1.1-1.6,1.9-3.5,2.3-6c-7.1-3.2-10.9-9.2-10.9-17.1     c0-12.1,9.1-19.6,23.8-19.6c14.7,0,23.8,7.5,23.8,19.6c0,12.2-8.9,19.6-23.8,19.6c-0.3,0-0.7,0-1,0     C-299.2-428.6-303.2-425.6-310-425.6L-310-425.6z M-296-467.8c-13.3,0-21.2,6.3-21.2,17c0,9.1,5.6,13.2,10.2,15.1l0.9,0.4l-0.1,1     c-0.3,2.3-0.8,4.3-1.6,6c4.8-0.6,7.6-3,9.1-5l0.4-0.5l0.9,0c0.4,0,0.9,0,1.3,0c19.1,0,21.2-11.9,21.2-17     C-274.8-461.4-282.7-467.8-296-467.8L-296-467.8z" id="Fill-59"/></g></g></svg>
              <span>1</span>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper__box-text">
        <div class="block__text">
          <div class="block__image">
            <img class="image" src="./src/img/собачка — копия.png">
          </div>
          <p class="text">You can attach pictures and files...</p>
          <div class="block__footer">
            <div class="block__icon">
              <svg class="icon" fill="#134563" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 24 24" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Icon"><path d="M20.75,7c0,-2.623 -2.127,-4.75 -4.75,-4.75c-2.443,0 -5.557,0 -8,0c-2.623,0 -4.75,2.127 -4.75,4.75c0,2.977 0,7.023 0,10c-0,2.623 2.127,4.75 4.75,4.75c2.443,0 5.557,0 8,0c2.623,-0 4.75,-2.127 4.75,-4.75l-0,-10Zm-1.5,0l0,10c0,1.795 -1.455,3.25 -3.25,3.25c-2.443,0 -5.557,0 -8,-0c-1.795,-0 -3.25,-1.455 -3.25,-3.25c0,-2.977 0,-7.023 -0,-10c-0,-1.795 1.455,-3.25 3.25,-3.25c2.443,0 5.557,0 8,0c1.795,0 3.25,1.455 3.25,3.25Z"/><path d="M8.995,9.25l6,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-6,-0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z"/><path d="M9,12.75l6,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-6,0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z"/><path d="M9,16.25l3,0c0.414,-0 0.75,-0.336 0.75,-0.75c-0,-0.414 -0.336,-0.75 -0.75,-0.75l-3,0c-0.414,-0 -0.75,0.336 -0.75,0.75c-0,0.414 0.336,0.75 0.75,0.75Z"/></g></svg>
            </div>
            <div class="block__icon">
              <svg class="icon" fill="#134563" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 612.675 612.675" style="enable-background:new 0 0 612.675 612.675;"
                xml:space="preserve">
              <g>
                <g id="_x34__17_">
                  <g>
                    <path d="M581.209,223.007L269.839,530.92c-51.592,51.024-135.247,51.024-186.839,0c-51.592-51.023-51.592-133.737,0-184.761
                      L363.248,69.04c34.402-34.009,90.15-34.009,124.553,0c34.402,34.008,34.402,89.166,0,123.174l-280.249,277.12
                      c-17.19,17.016-45.075,17.016-62.287,0c-17.19-16.993-17.19-44.571,0-61.587L394.37,161.42l-31.144-30.793L114.144,376.975
                      c-34.402,34.009-34.402,89.166,0,123.174c34.402,34.009,90.15,34.009,124.552,0l280.249-277.12
                      c51.592-51.023,51.592-133.737,0-184.761c-51.593-51.023-135.247-51.023-186.839,0L36.285,330.784l1.072,1.071
                      c-53.736,68.323-49.012,167.091,14.5,229.88c63.512,62.79,163.35,67.492,232.46,14.325l1.072,1.072l326.942-323.31
                      L581.209,223.007z"/>
                  </g>
                </g>
              </g>
              </svg>
              <span>2</span>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper__box-text">
        <div class="block__text">
          <p class="text">... any kind of hyperlink ...</p>
          <div class="block__footer">
            <div class="block__icon">
              <svg class="icon" fill="#134563" id="Layer_1" style="enable-background:new 0 0 64 64;" version="1.1" viewBox="0 0 64 64" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">
              </style><g><g id="Icon-Comment" transform="translate(328.000000, 480.000000)"><path class="st0" d="M-310-425.6h-2.5l1.5-2.1c1.1-1.6,1.9-3.5,2.3-6c-7.1-3.2-10.9-9.2-10.9-17.1     c0-12.1,9.1-19.6,23.8-19.6c14.7,0,23.8,7.5,23.8,19.6c0,12.2-8.9,19.6-23.8,19.6c-0.3,0-0.7,0-1,0     C-299.2-428.6-303.2-425.6-310-425.6L-310-425.6z M-296-467.8c-13.3,0-21.2,6.3-21.2,17c0,9.1,5.6,13.2,10.2,15.1l0.9,0.4l-0.1,1     c-0.3,2.3-0.8,4.3-1.6,6c4.8-0.6,7.6-3,9.1-5l0.4-0.5l0.9,0c0.4,0,0.9,0,1.3,0c19.1,0,21.2-11.9,21.2-17     C-274.8-461.4-282.7-467.8-296-467.8L-296-467.8z" id="Fill-59"/></g></g></svg>
              <span>1</span>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper__box-text">
        <div class="block__text">
          <p class="text">... or checklists ...</p>
          <div class="block__footer">
            <div class="block__icon">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="#134563" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-checkbox-marked-outline" width="24" height="24" viewBox="0 0 24 24"><path d="M19,19H5V5H15V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V11H19M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z" /></svg>          
              <span>1/3</span>
            </div>
          </div>
        </div>
      </div>
      <span class="card-add">+ Add another card</span>
    </div>
    <div class="wrapper__block">
      <div class="block__header">
        <header class="header">in progress</header>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#134563">
          <path fill-rule="evenodd" d="M7,12 C7,13.1045695 6.1045695,14 5,14 C3.8954305,14 3,13.1045695 3,12 C3,10.8954305 3.8954305,10 5,10 C6.1045695,10 7,10.8954305 7,12 Z M21,12 C21,13.1045695 20.1045695,14 19,14 C17.8954305,14 17,13.1045695 17,12 C17,10.8954305 17.8954305,10 19,10 C20.1045695,10 21,10.8954305 21,12 Z M14,12 C14,13.1045695 13.1045695,14 12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 Z"/>
        </svg>  
      </div>
      <div class="wrapper__box-text">
        <div class="block__text">
          <p class="text">Invite your team to this board using the Add Members button</p>
        </div>
      </div>
      <div class="wrapper__box-text">
        <div class="block__text">
          <p class="text">Drag people onto a card to indicate that they're responsible for it</p>
        </div>
      </div>
      <div class="wrapper__box-text">
        <div class="block__text">
          <p class="text">Use color-coded labels for organization</p>
        </div>
      </div>
      <div class="wrapper__box-text">
        <div class="block__text">
          <p class="text">Make as many lists as you need!</p>
          <div class="block__footer">
            <div class="block__icon">
              <svg class="icon" fill="#134563" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 24 24" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Icon"><path d="M20.75,7c0,-2.623 -2.127,-4.75 -4.75,-4.75c-2.443,0 -5.557,0 -8,0c-2.623,0 -4.75,2.127 -4.75,4.75c0,2.977 0,7.023 0,10c-0,2.623 2.127,4.75 4.75,4.75c2.443,0 5.557,0 8,0c2.623,-0 4.75,-2.127 4.75,-4.75l-0,-10Zm-1.5,0l0,10c0,1.795 -1.455,3.25 -3.25,3.25c-2.443,0 -5.557,0 -8,-0c-1.795,-0 -3.25,-1.455 -3.25,-3.25c0,-2.977 0,-7.023 -0,-10c-0,-1.795 1.455,-3.25 3.25,-3.25c2.443,0 5.557,0 8,0c1.795,0 3.25,1.455 3.25,3.25Z"/><path d="M8.995,9.25l6,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-6,-0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z"/><path d="M9,12.75l6,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-6,0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z"/><path d="M9,16.25l3,0c0.414,-0 0.75,-0.336 0.75,-0.75c-0,-0.414 -0.336,-0.75 -0.75,-0.75l-3,0c-0.414,-0 -0.75,0.336 -0.75,0.75c-0,0.414 0.336,0.75 0.75,0.75Z"/></g></svg>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper__box-text">
        <div class="block__text">
          <p class="text">Try dragging cards anywhere.</p>
        </div>
      </div>
      <div class="wrapper__box-text">
        <div class="block__text">
          <p class="text">Finished with a card? Archive it.</p>
          <div class="block__footer">
            <div class="block__icon">
              <svg class="icon" fill="#134563" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 24 24" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Icon"><path d="M20.75,7c0,-2.623 -2.127,-4.75 -4.75,-4.75c-2.443,0 -5.557,0 -8,0c-2.623,0 -4.75,2.127 -4.75,4.75c0,2.977 0,7.023 0,10c-0,2.623 2.127,4.75 4.75,4.75c2.443,0 5.557,0 8,0c2.623,-0 4.75,-2.127 4.75,-4.75l-0,-10Zm-1.5,0l0,10c0,1.795 -1.455,3.25 -3.25,3.25c-2.443,0 -5.557,0 -8,-0c-1.795,-0 -3.25,-1.455 -3.25,-3.25c0,-2.977 0,-7.023 -0,-10c-0,-1.795 1.455,-3.25 3.25,-3.25c2.443,0 5.557,0 8,0c1.795,0 3.25,1.455 3.25,3.25Z"/><path d="M8.995,9.25l6,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-6,-0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z"/><path d="M9,12.75l6,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-6,0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z"/><path d="M9,16.25l3,0c0.414,-0 0.75,-0.336 0.75,-0.75c-0,-0.414 -0.336,-0.75 -0.75,-0.75l-3,0c-0.414,-0 -0.75,0.336 -0.75,0.75c-0,0.414 0.336,0.75 0.75,0.75Z"/></g></svg>
            </div>
          </div>
        </div>
      </div>
      <span class="card-add">+ Add another card</span>
    </div>
    <div class="wrapper__block">
      <div class="block__header">
        <header class="header">done</header>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#134563">
          <path fill-rule="evenodd" d="M7,12 C7,13.1045695 6.1045695,14 5,14 C3.8954305,14 3,13.1045695 3,12 C3,10.8954305 3.8954305,10 5,10 C6.1045695,10 7,10.8954305 7,12 Z M21,12 C21,13.1045695 20.1045695,14 19,14 C17.8954305,14 17,13.1045695 17,12 C17,10.8954305 17.8954305,10 19,10 C20.1045695,10 21,10.8954305 21,12 Z M14,12 C14,13.1045695 13.1045695,14 12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 Z"/>
        </svg>  
      </div>
      <div class="wrapper__box-text">
        <div class="block__text">
          <p class="text">To learn more tricks, check out the guide.</p>
          <div class="block__footer">
            <div class="block__icon">
              <svg class="icon" fill="#134563" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 24 24" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Icon"><path d="M20.75,7c0,-2.623 -2.127,-4.75 -4.75,-4.75c-2.443,0 -5.557,0 -8,0c-2.623,0 -4.75,2.127 -4.75,4.75c0,2.977 0,7.023 0,10c-0,2.623 2.127,4.75 4.75,4.75c2.443,0 5.557,0 8,0c2.623,-0 4.75,-2.127 4.75,-4.75l-0,-10Zm-1.5,0l0,10c0,1.795 -1.455,3.25 -3.25,3.25c-2.443,0 -5.557,0 -8,-0c-1.795,-0 -3.25,-1.455 -3.25,-3.25c0,-2.977 0,-7.023 -0,-10c-0,-1.795 1.455,-3.25 3.25,-3.25c2.443,0 5.557,0 8,0c1.795,0 3.25,1.455 3.25,3.25Z"/><path d="M8.995,9.25l6,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-6,-0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z"/><path d="M9,12.75l6,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-6,0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z"/><path d="M9,16.25l3,0c0.414,-0 0.75,-0.336 0.75,-0.75c-0,-0.414 -0.336,-0.75 -0.75,-0.75l-3,0c-0.414,-0 -0.75,0.336 -0.75,0.75c-0,0.414 0.336,0.75 0.75,0.75Z"/></g></svg>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper__box-text">
        <div class="block__text">
          <p class="text">Use as many boards as you want. We'll make more!</p>
          <div class="block__footer">
            <div class="block__icon">
              <svg class="icon" fill="#134563" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 24 24" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Icon"><path d="M20.75,7c0,-2.623 -2.127,-4.75 -4.75,-4.75c-2.443,0 -5.557,0 -8,0c-2.623,0 -4.75,2.127 -4.75,4.75c0,2.977 0,7.023 0,10c-0,2.623 2.127,4.75 4.75,4.75c2.443,0 5.557,0 8,0c2.623,-0 4.75,-2.127 4.75,-4.75l-0,-10Zm-1.5,0l0,10c0,1.795 -1.455,3.25 -3.25,3.25c-2.443,0 -5.557,0 -8,-0c-1.795,-0 -3.25,-1.455 -3.25,-3.25c0,-2.977 0,-7.023 -0,-10c-0,-1.795 1.455,-3.25 3.25,-3.25c2.443,0 5.557,0 8,0c1.795,0 3.25,1.455 3.25,3.25Z"/><path d="M8.995,9.25l6,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-6,-0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z"/><path d="M9,12.75l6,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-6,0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z"/><path d="M9,16.25l3,0c0.414,-0 0.75,-0.336 0.75,-0.75c-0,-0.414 -0.336,-0.75 -0.75,-0.75l-3,0c-0.414,-0 -0.75,0.336 -0.75,0.75c-0,0.414 0.336,0.75 0.75,0.75Z"/></g></svg>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper__box-text">
        <div class="block__text">
          <p class="text">Want to use keyboard shortcuts? We have them!</p>
          <div class="block__footer">
            <div class="block__icon">
              <svg class="icon" fill="#134563" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 24 24" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Icon"><path d="M20.75,7c0,-2.623 -2.127,-4.75 -4.75,-4.75c-2.443,0 -5.557,0 -8,0c-2.623,0 -4.75,2.127 -4.75,4.75c0,2.977 0,7.023 0,10c-0,2.623 2.127,4.75 4.75,4.75c2.443,0 5.557,0 8,0c2.623,-0 4.75,-2.127 4.75,-4.75l-0,-10Zm-1.5,0l0,10c0,1.795 -1.455,3.25 -3.25,3.25c-2.443,0 -5.557,0 -8,-0c-1.795,-0 -3.25,-1.455 -3.25,-3.25c0,-2.977 0,-7.023 -0,-10c-0,-1.795 1.455,-3.25 3.25,-3.25c2.443,0 5.557,0 8,0c1.795,0 3.25,1.455 3.25,3.25Z"/><path d="M8.995,9.25l6,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-6,-0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z"/><path d="M9,12.75l6,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-6,0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z"/><path d="M9,16.25l3,0c0.414,-0 0.75,-0.336 0.75,-0.75c-0,-0.414 -0.336,-0.75 -0.75,-0.75l-3,0c-0.414,-0 -0.75,0.336 -0.75,0.75c-0,0.414 0.336,0.75 0.75,0.75Z"/></g></svg>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper__box-text">
        <div class="block__text">
          <p class="text">Want updates on new features?</p>
          <div class="block__footer">
            <div class="block__icon">
              <svg class="icon" fill="#134563" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 24 24" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Icon"><path d="M20.75,7c0,-2.623 -2.127,-4.75 -4.75,-4.75c-2.443,0 -5.557,0 -8,0c-2.623,0 -4.75,2.127 -4.75,4.75c0,2.977 0,7.023 0,10c-0,2.623 2.127,4.75 4.75,4.75c2.443,0 5.557,0 8,0c2.623,-0 4.75,-2.127 4.75,-4.75l-0,-10Zm-1.5,0l0,10c0,1.795 -1.455,3.25 -3.25,3.25c-2.443,0 -5.557,0 -8,-0c-1.795,-0 -3.25,-1.455 -3.25,-3.25c0,-2.977 0,-7.023 -0,-10c-0,-1.795 1.455,-3.25 3.25,-3.25c2.443,0 5.557,0 8,0c1.795,0 3.25,1.455 3.25,3.25Z"/><path d="M8.995,9.25l6,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-6,-0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z"/><path d="M9,12.75l6,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-6,0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z"/><path d="M9,16.25l3,0c0.414,-0 0.75,-0.336 0.75,-0.75c-0,-0.414 -0.336,-0.75 -0.75,-0.75l-3,0c-0.414,-0 -0.75,0.336 -0.75,0.75c-0,0.414 0.336,0.75 0.75,0.75Z"/></g></svg>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper__box-text">
        <div class="block__text">
          <p class="text">Need help?</p>
          <div class="block__footer">
            <div class="block__icon">
              <svg class="icon" fill="#134563" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 24 24" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Icon"><path d="M20.75,7c0,-2.623 -2.127,-4.75 -4.75,-4.75c-2.443,0 -5.557,0 -8,0c-2.623,0 -4.75,2.127 -4.75,4.75c0,2.977 0,7.023 0,10c-0,2.623 2.127,4.75 4.75,4.75c2.443,0 5.557,0 8,0c2.623,-0 4.75,-2.127 4.75,-4.75l-0,-10Zm-1.5,0l0,10c0,1.795 -1.455,3.25 -3.25,3.25c-2.443,0 -5.557,0 -8,-0c-1.795,-0 -3.25,-1.455 -3.25,-3.25c0,-2.977 0,-7.023 -0,-10c-0,-1.795 1.455,-3.25 3.25,-3.25c2.443,0 5.557,0 8,0c1.795,0 3.25,1.455 3.25,3.25Z"/><path d="M8.995,9.25l6,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-6,-0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z"/><path d="M9,12.75l6,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-6,0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z"/><path d="M9,16.25l3,0c0.414,-0 0.75,-0.336 0.75,-0.75c-0,-0.414 -0.336,-0.75 -0.75,-0.75l-3,0c-0.414,-0 -0.75,0.336 -0.75,0.75c-0,0.414 0.336,0.75 0.75,0.75Z"/></g></svg>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper__box-text">
        <div class="block__text">
          <p class="text">Want current tips, usage examples, or API info?</p>
          <div class="block__footer">
            <div class="block__icon">
              <svg class="icon" fill="#134563" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 24 24" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Icon"><path d="M20.75,7c0,-2.623 -2.127,-4.75 -4.75,-4.75c-2.443,0 -5.557,0 -8,0c-2.623,0 -4.75,2.127 -4.75,4.75c0,2.977 0,7.023 0,10c-0,2.623 2.127,4.75 4.75,4.75c2.443,0 5.557,0 8,0c2.623,-0 4.75,-2.127 4.75,-4.75l-0,-10Zm-1.5,0l0,10c0,1.795 -1.455,3.25 -3.25,3.25c-2.443,0 -5.557,0 -8,-0c-1.795,-0 -3.25,-1.455 -3.25,-3.25c0,-2.977 0,-7.023 -0,-10c-0,-1.795 1.455,-3.25 3.25,-3.25c2.443,0 5.557,0 8,0c1.795,0 3.25,1.455 3.25,3.25Z"/><path d="M8.995,9.25l6,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-6,-0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z"/><path d="M9,12.75l6,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-6,0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z"/><path d="M9,16.25l3,0c0.414,-0 0.75,-0.336 0.75,-0.75c-0,-0.414 -0.336,-0.75 -0.75,-0.75l-3,0c-0.414,-0 -0.75,0.336 -0.75,0.75c-0,0.414 0.336,0.75 0.75,0.75Z"/></g></svg>
            </div>
          </div>
        </div>
      </div>
      <span class="card-add">+ Add another card</span>
    </div>
  </div>
`;

export const buttonRemoveBlock = `
<div class="wrapper__button-remove">
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title/><g id="cross"><line class="cls-1" x1="7" x2="25" y1="7" y2="25"/><line class="cls-1" x1="7" x2="25" y1="25" y2="7"/></g></svg>
</div>
`;

export const buttonResetPage = document.querySelector('.button_reset');
export const body = document.querySelector('body');
export const newBlockInit = `
<div class="block__text_init">
  <textarea class="textarea" placeholder="Enter a title for this card..."></textarea>
  <div class="box-button">
    <button type="button" class="button__text-add">Add Card</button>
    <div class="box-icon">
      <svg class="icon icon-pr" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title/><g id="cross"><line class="cls-1" x1="7" x2="25" y1="7" y2="25"/><line class="cls-1" x1="7" x2="25" y1="25" y2="7"/></g></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M7,12 C7,13.1045695 6.1045695,14 5,14 C3.8954305,14 3,13.1045695 3,12 C3,10.8954305 3.8954305,10 5,10 C6.1045695,10 7,10.8954305 7,12 Z M21,12 C21,13.1045695 20.1045695,14 19,14 C17.8954305,14 17,13.1045695 17,12 C17,10.8954305 17.8954305,10 19,10 C20.1045695,10 21,10.8954305 21,12 Z M14,12 C14,13.1045695 13.1045695,14 12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 Z"/>
      </svg>
    </div>
  </div>
</div>
`;

export const newBlock = function (text) {
  return `
  <div class="wrapper__box-text">
    <div class="block__text">
      <p class="text">${text}</p>
    </div>
  </div>
  `;
};
