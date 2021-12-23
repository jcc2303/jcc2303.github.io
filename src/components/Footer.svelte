<script>

    import Email from './Email.svelte'
    export let basics

</script>

<footer class="bg-gray-900 text-white">
    <div class="sm:flex justify-between items-center mx-4">
        <ul class="flex justify-center p-6">
            <li>
                <a
                    href="https://jcc2303.github.io"
                    title={basics.name}
                    target="_blank"
                    rel="noopener noreferrer">
                    {basics.name}
                </a>
            </li>
            <li class="px-6" >
                <!-- <HearthLogo class="w-6 h-6" ></HearthLogo> -->
            </li>
            <li>
                <a
                    href="http://www.tecla5.com/"
                    title="Styleshout"
                    target="_blank"
                    rel="noopener noreferrer">
                    Tecla5
                </a>
            </li>
        </ul>
        <div class="p-2 align-center">
            <a href={"mailto:"+basics.email}>Contact Me!</a>              
        </div>
        <div>
            <Email />        
        </div>        
    </div>
    <div id="go-top">
        <a class="" title="Back to Top" href="#home">
            <i class=""/>
        </a>
    </div>
</footer>
