<template>
    <div class="text-center center">
      <p>  Deze promotie wordt onafhankelijk georganiseerd door Green Flamingo, en heeft op geen enkele manier een relatie met de fabrikanten van de getoonde producten. De handelsmerken zijn het eigendom van hun respectievelijke eigenaren. Alle afbeeldingen worden alleen getoond voor illustratieve doeleinden. Deelname mogelijk tot 31-12-2020.
    </p>
    <ul class="navbar-nav flex-row flex-wrap bd-navbar-nav pt-2 py-md-0  justify-content-md-center justify-content-start">
        <li class="nav-item col-6 col-md-auto" v-for="(item,index) in items" :key="index">
            <a class="nav-link p-2 text-light" href="{{item.url}}" target="_blank">{{item.label}}</a>
        </li>
    </ul>

    </div>

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