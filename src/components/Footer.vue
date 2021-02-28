<template>
    <footer>
           <div class="copyright text-center">
      <p class="fw-light">  Deze promotie wordt onafhankelijk georganiseerd door Green Flamingo, en heeft op geen enkele manier een relatie met de fabrikanten van de getoonde producten. De handelsmerken zijn het eigendom van hun respectievelijke eigenaren. Alle afbeeldingen worden alleen getoond voor illustratieve doeleinden. Deelname mogelijk tot 31-12-2020.
    </p>
    <ul class="links" >
        <li class="d-inline-block" v-for="(item,index) in items" :key="index">
            <a class="nav-link p-2" href="{{item.url}}" target="_blank">{{item.label}}</a>
        </li>
    </ul>

    </div>
    </footer>

</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label :'Voorwaarden',
                    url:'#',
                },
                {
                    label :'Privacy',
                    url:'#',
                },
                {
                    label :'GDPR Transparency',
                    url:'#',
                },
                {
                    label :'Cookies',
                    url:'#',
                }
            ]
        }
    },
}
</script>
<style lang="scss">
@import 'bootstrap/scss/bootstrap.scss';
.copyright{
    font-size: 0.7rem;
    margin-top: 1rem;
    bottom: 30px;
    .nav-link{
        color:  #fff;
    }
    
}

@media (min-width: 767px) {
  
    footer {
    position: relative;
    bottom: 0;
    margin-top: 100px;
    

    }
}

</style>