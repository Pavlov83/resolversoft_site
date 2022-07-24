class MyHeader extends HTMLElement{

    connectedCallback(){
        this.innerHTML =`
        <div class="container">
        <nav class="navbar navbar-expand-sm navbar-light">
            <a class="navbar-brand" href="../index.html">
                <span class="hidden">Resolversoft</span>
              </a>
            <button 
            	class="navbar-toggler" 
            	type="button" 
            	data-bs-toggle="collapse" 
            	data-bs-target="#toggleMobileMenu" 
            	aria-controls="toggleMobileMenu" 
            	aria-expanded="false" 
            	aria-label="Toggle navigation"
            >
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="toggleMobileMenu">
            
                <ul class="navbar-nav ms-auto text-center">
                    <li>
                        <a class="nav-link" href="#">Tutorials</a>
                    </li>
                    <li>
                        <a class="nav-link" href="#">Blog</a>
                    </li>
                    <li>
                        <a class="nav-link" href="#">About</a>
                    </li>
                </ul>
                
            </div>
        </nav>
      </div>
      <div class="container">

        `
    }

}
customElements.define('my-header',MyHeader)