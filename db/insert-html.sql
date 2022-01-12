INSERT INTO html (prompt)
VALUES
("<body>

  <header class='jumbotron jumbotron-fluid custom-jumbotron'>
    <div class='container text-center'>
      <h1>Project Tracker</h1>
      <h2>Current Time &amp; Date: <br /> <span id='time-display'>00:00:00</span></h2>
    </div>
  </header>

  <main class='container-fluid'>
    <div class='row'>
      <section class='col-12 col-md-4 col-lg-3'>
        <div class='card custom-card'>
          <h3 class='card-header'>
            Instructions
          </h3>
          <div class='card-body'>
            <div class='card-text'>
              Click the button below to open a form and provide information for the following:
            </div>
          </div>
          <ul class='list-group list-group-flush'>
            <li class='list-group-item'>Project Name</li>
            <li class='list-group-item'>Project Type</li>
            <li class='list-group-item'>Due Date</li>
            <li class='list-group-item'>Hourly Rate</li>
          </ul>
          <div class='card-footer'>
            <button class='btn btn-block custom-btn' data-toggle='modal' data-target='#project-modal'>Add
              Project</button>
          </div>
        </div>
      </section>

      <section class='col-12 col-md-8 col-lg-9'>
        <div class='table-responsive'>
          <table class='table table-bordered custom-table'>
            <thead>
              <tr>
                <th scope='col'>Project Name</th>
                <th scope='col'>Project Type</th>
                <th scope='col'>Hourly Rate ($)</th>
                <th scope='col'>Due Date</th>
                <th scope='col'>Days Until Due Date</th>
                <th scope='col'>Potential Total Earnings ($)</th>
                <th scope='col' class='p-3'></th>
              </tr>
            </thead>
            <tbody id='project-display'></tbody>
          </table>
        </div>
      </section>
    </div>
  </main>

  <!-- Modal -->
  <div class='modal fade custom-modal' id='project-modal' tabindex='-1' role='dialog'
    aria-labelledby='project-modal-form' aria-hidden='true'>
    <div class='modal-dialog modal-lg modal-dialog-centered'>
      <div class='modal-content'>
        <div class='modal-header'>
          <h5 class='modal-title' id='project-modal-form'>Add a new project.</h5>
          <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
            <span aria-hidden='true'>&times;</span>
          </button>
        </div>
        <form id='project-form'>
          <div class='modal-body'>
            <div class='form-group'>
              <label for='project-name-input'>Project Name</label>
              <input type='text' id='project-name-input' class='form-control' placeholder='Enter the project's name'
                required />
            </div>

            <div class='form-group'>
              <label for='project-type-input'>Project Type</label>
              <select class='form-control' id='project-type-input'>
                <option selected disabled>Pick one...</option>
                <option value='Web Application (Front End)'>Web Application (Front End)</option>
                <option value='Web Application (Back End)'>Web Application (Back End)</option>
                <option value='Web Application (Full Stack)'>Web Application (Full Stack)</option>
                <option value='Mobile Application'>Mobile Application</option>
                <option value='Print Campaign'>Print Campaign</option>
                <option value='Digital Marketing Campaign'>Digital Marketing Campaign</option>
              </select>
            </div>

            <div class='form-group'>
              <label for='hourly-rate-input'>Hourly Rate ($)</label>
              <input type='number' id='hourly-rate-input' class='form-control' placeholder='$' min='0' required />
            </div>

            <div class='form-group'>
              <label for='due-date-input'>Due Date</label>
              <input type='text' min='1' id='due-date-input' class='form-control' placeholder='When is the project due?'
                required />
            </div>
          </div>
          <div class='modal-footer'>
            <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
            <button type='submit' class='btn custom-btn'>Submit Project Info</button>
          </div>
        </form>
      </div>
    </div>
  </div>

</body> "),

("
    <body>


  <header>
    <h1 class='page-title'>
      CSS Snippet Cheatsheet
    </h1>
    <p>
      Ever have trouble recalling the exact syntax for your favorite CSS code? Give it a permanent home and add it to
      this page! Select any snippet below and it'll automatically select all of the code for you to copy.
    </p>
  </header>

  <main>
    <section class='row justify-center'>
      <div class='card-column'>
        <figure class='card code-card'>
          <h2 class='card-header'>Flexbox Row</h2>
          <div class='card-body'>
            <p>Use these three properties to create a Flexbox row layout.</p>
          </div>
          <!-- with the <pre> element, it counts all spaces literally, so proper code indentation cannot be applied in this case -->
          <pre class='code-block'><code>.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}</code></pre>
        </figure>
      </div>
      <div class='card-column'>
        <figure class='card code-card'>
          <h2 class='card-header'>Flexbox Column</h2>
          <div class='card-body'>
            <p>Use this to create a Flexbox column layout.</p>
          </div>
          <pre class='code-block'><code>.column {
  display: flex;
  flex-direction: column
}</code></pre>
        </figure>
      </div>

      <div class='card-column'>
        <figure class='card code-card'>
          <h2 class='card-header'>CSS Grid Layout</h2>
          <div class='card-body'>
            <p>Build a 12-column layout using CSS Grid</p>
          </div>
          <pre class='code-block'><code>.grid {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(12, 1fr);
}</code></pre>
        </figure>
      </div>
      <div class='card-column'>
        <figure class='card code-card'>
          <h2 class='card-header'>Linear Gradients</h2>
          <div class='card-body'>
            <p>This will create a background linear gradient from top to bottom.</p>
          </div>
          <pre class='code-block'><code>.linear-gradient-background {
  background-image: linear-gradient(
    rgba(232, 102, 236, 0.3) 0%,
    rgba(232, 102, 236, 0.6) 100%
  );
}</code></pre>
        </figure>
      </div>
      <div class='card-column'>
        <figure class='card code-card'>
          <h2 class='card-header'>Box Transition Glow</h2>
          <div class='card-body'>
            <p>Use transition and box shadows to glow on hover.</p>
          </div>
          <pre class='code-block'><code>.code-card .card-header {
  border-radius: 8px;
  transition: all 0.5s ease-in-out;
}

.code-card:hover,
.code-card:hover .card-header {
  box-shadow: inset 0px 0px 8px rgba(232, 102, 236, 1), 0 0 15px rgba(232, 102, 236, 1);
}</code></pre>
        </figure>
      </div>

      <div class='card-column'>
        <figure class='card code-card'>
          <h2 class='card-header'>Overlay Card with Title</h2>
          <div class='card-body'>
            <p>Use position properties and negative margins to raise elements higher than their natural starting point.
            </p>
          </div>
          <pre class='code-block'><code>.card-header {
  position: relative;
  margin-top: -20px;
}</code></pre>
        </figure>
      </div>
    </section>
  </main>

  <footer>
    <h3>Made with <span role='img' aria-label='heart'>❤️</span> and CSS</h3>
  </footer>

</body>
")