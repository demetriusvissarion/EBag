'use strict';

// Don't pollute the global namespace
(function profile() {
    // Contents of form state
    const signup = 
    `<span class="auth__heading">Sign up</span>
    <div class="auth__input-pair">
      <div>
        <label>Enter your first name</label>
        <input
          type="text"
          name="firstname"
          required
        />
      </div>
      <div>
        <label>Enter your last name</label>
        <input
          type="text"
          name="lastname"
          required
        />
      </div>
    </div>
    <label>Enter your email</label>
    <input
      type="text"
      name="email"
      required
    />
    <label>Phone</label>
    <input
      type="text"
      name="phone"
      value="+40"
      required
    />
    <div class="auth__input-pair">
      <div>
        <label>Password</label>
        <input
          type="text"
          name="pw"
          required
        />
      </div>
      <div>
        <label>Re-type password</label>
        <input
          type="text"
          name="rtpw"
          required
        />
      </div>
    </div>
    <button class="auth__btn--continue" type="submit">Continue</button>`;
    
    const signin = 
    `<span class="auth__heading">Sign in</span>
    <label>Enter your email</label>
    <input
      type="text"
      name="email"
      required
    />
    <label>Password</label>
    <input
      type="text"
      name="pw"
      required
    />
    <button class="auth__btn--continue" type="submit">Continue</button>`;

    const formContent = document.querySelector('.auth');

    function changeState(e, content, title, btn) {
        formContent.innerHTML = content;
        document.title = title;
        e.target.innerHTML = btn;
    }

    document.querySelector('.auth__btn--switch-state').addEventListener('click', e => {
        // Clear form content
        formContent.innerHTML = '';

        // Add new form content
        e.target.innerHTML === 'Sign in' ? changeState(e, signin, 'Sign in', 'Sign up') : changeState(e, signup, 'Sign up', 'Sign in');
    });
})();