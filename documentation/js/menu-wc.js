'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">bedonor documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-76ffff7e3a12df26b1486e3e2082fcaebbaef431333a85ba90183f08abf00841a76fc978907c3dc1f602d2e2466b8eff88c678c94ed80cdf8b2ee4e96b3e035e"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-76ffff7e3a12df26b1486e3e2082fcaebbaef431333a85ba90183f08abf00841a76fc978907c3dc1f602d2e2466b8eff88c678c94ed80cdf8b2ee4e96b3e035e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-76ffff7e3a12df26b1486e3e2082fcaebbaef431333a85ba90183f08abf00841a76fc978907c3dc1f602d2e2466b8eff88c678c94ed80cdf8b2ee4e96b3e035e"' :
                                            'id="xs-controllers-links-module-AuthModule-76ffff7e3a12df26b1486e3e2082fcaebbaef431333a85ba90183f08abf00841a76fc978907c3dc1f602d2e2466b8eff88c678c94ed80cdf8b2ee4e96b3e035e"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-76ffff7e3a12df26b1486e3e2082fcaebbaef431333a85ba90183f08abf00841a76fc978907c3dc1f602d2e2466b8eff88c678c94ed80cdf8b2ee4e96b3e035e"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-76ffff7e3a12df26b1486e3e2082fcaebbaef431333a85ba90183f08abf00841a76fc978907c3dc1f602d2e2466b8eff88c678c94ed80cdf8b2ee4e96b3e035e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-76ffff7e3a12df26b1486e3e2082fcaebbaef431333a85ba90183f08abf00841a76fc978907c3dc1f602d2e2466b8eff88c678c94ed80cdf8b2ee4e96b3e035e"' :
                                        'id="xs-injectables-links-module-AuthModule-76ffff7e3a12df26b1486e3e2082fcaebbaef431333a85ba90183f08abf00841a76fc978907c3dc1f602d2e2466b8eff88c678c94ed80cdf8b2ee4e96b3e035e"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CentersModule.html" data-type="entity-link" >CentersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CentersModule-f212f4fe395717d10365bac267676879457fa79809c5582981d2d86be80268c77efe4e0c701495c0c11df16bb3b3658e34564276a4f27ad1c7b0b515b7062ab4"' : 'data-bs-target="#xs-controllers-links-module-CentersModule-f212f4fe395717d10365bac267676879457fa79809c5582981d2d86be80268c77efe4e0c701495c0c11df16bb3b3658e34564276a4f27ad1c7b0b515b7062ab4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CentersModule-f212f4fe395717d10365bac267676879457fa79809c5582981d2d86be80268c77efe4e0c701495c0c11df16bb3b3658e34564276a4f27ad1c7b0b515b7062ab4"' :
                                            'id="xs-controllers-links-module-CentersModule-f212f4fe395717d10365bac267676879457fa79809c5582981d2d86be80268c77efe4e0c701495c0c11df16bb3b3658e34564276a4f27ad1c7b0b515b7062ab4"' }>
                                            <li class="link">
                                                <a href="controllers/CentersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CentersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CentersModule-f212f4fe395717d10365bac267676879457fa79809c5582981d2d86be80268c77efe4e0c701495c0c11df16bb3b3658e34564276a4f27ad1c7b0b515b7062ab4"' : 'data-bs-target="#xs-injectables-links-module-CentersModule-f212f4fe395717d10365bac267676879457fa79809c5582981d2d86be80268c77efe4e0c701495c0c11df16bb3b3658e34564276a4f27ad1c7b0b515b7062ab4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CentersModule-f212f4fe395717d10365bac267676879457fa79809c5582981d2d86be80268c77efe4e0c701495c0c11df16bb3b3658e34564276a4f27ad1c7b0b515b7062ab4"' :
                                        'id="xs-injectables-links-module-CentersModule-f212f4fe395717d10365bac267676879457fa79809c5582981d2d86be80268c77efe4e0c701495c0c11df16bb3b3658e34564276a4f27ad1c7b0b515b7062ab4"' }>
                                        <li class="link">
                                            <a href="injectables/CentersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CentersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CitiesModule.html" data-type="entity-link" >CitiesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CitiesModule-708bfe6b5bc615c91265148fd9e2175e5c2d7956bd36f60fd67beb09f976c2dba4c0c059137ffad778895ccac60ac370934c5529c42e2275a4dbfed57fe6ac90"' : 'data-bs-target="#xs-controllers-links-module-CitiesModule-708bfe6b5bc615c91265148fd9e2175e5c2d7956bd36f60fd67beb09f976c2dba4c0c059137ffad778895ccac60ac370934c5529c42e2275a4dbfed57fe6ac90"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CitiesModule-708bfe6b5bc615c91265148fd9e2175e5c2d7956bd36f60fd67beb09f976c2dba4c0c059137ffad778895ccac60ac370934c5529c42e2275a4dbfed57fe6ac90"' :
                                            'id="xs-controllers-links-module-CitiesModule-708bfe6b5bc615c91265148fd9e2175e5c2d7956bd36f60fd67beb09f976c2dba4c0c059137ffad778895ccac60ac370934c5529c42e2275a4dbfed57fe6ac90"' }>
                                            <li class="link">
                                                <a href="controllers/CitiesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CitiesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CitiesModule-708bfe6b5bc615c91265148fd9e2175e5c2d7956bd36f60fd67beb09f976c2dba4c0c059137ffad778895ccac60ac370934c5529c42e2275a4dbfed57fe6ac90"' : 'data-bs-target="#xs-injectables-links-module-CitiesModule-708bfe6b5bc615c91265148fd9e2175e5c2d7956bd36f60fd67beb09f976c2dba4c0c059137ffad778895ccac60ac370934c5529c42e2275a4dbfed57fe6ac90"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CitiesModule-708bfe6b5bc615c91265148fd9e2175e5c2d7956bd36f60fd67beb09f976c2dba4c0c059137ffad778895ccac60ac370934c5529c42e2275a4dbfed57fe6ac90"' :
                                        'id="xs-injectables-links-module-CitiesModule-708bfe6b5bc615c91265148fd9e2175e5c2d7956bd36f60fd67beb09f976c2dba4c0c059137ffad778895ccac60ac370934c5529c42e2275a4dbfed57fe6ac90"' }>
                                        <li class="link">
                                            <a href="injectables/CitiesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CitiesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DonationRequestsModule.html" data-type="entity-link" >DonationRequestsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DonationRequestsModule-11fd15fe41e049bee9fe7ff6909aa8fbf0c707c2f36c955cbe280287c7e9026a5841ac36c4ff81ec14feb892b4848b61c3d4888e9209da345b45f1e3d8a033a3"' : 'data-bs-target="#xs-controllers-links-module-DonationRequestsModule-11fd15fe41e049bee9fe7ff6909aa8fbf0c707c2f36c955cbe280287c7e9026a5841ac36c4ff81ec14feb892b4848b61c3d4888e9209da345b45f1e3d8a033a3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DonationRequestsModule-11fd15fe41e049bee9fe7ff6909aa8fbf0c707c2f36c955cbe280287c7e9026a5841ac36c4ff81ec14feb892b4848b61c3d4888e9209da345b45f1e3d8a033a3"' :
                                            'id="xs-controllers-links-module-DonationRequestsModule-11fd15fe41e049bee9fe7ff6909aa8fbf0c707c2f36c955cbe280287c7e9026a5841ac36c4ff81ec14feb892b4848b61c3d4888e9209da345b45f1e3d8a033a3"' }>
                                            <li class="link">
                                                <a href="controllers/DonationRequestsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DonationRequestsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DonationRequestsModule-11fd15fe41e049bee9fe7ff6909aa8fbf0c707c2f36c955cbe280287c7e9026a5841ac36c4ff81ec14feb892b4848b61c3d4888e9209da345b45f1e3d8a033a3"' : 'data-bs-target="#xs-injectables-links-module-DonationRequestsModule-11fd15fe41e049bee9fe7ff6909aa8fbf0c707c2f36c955cbe280287c7e9026a5841ac36c4ff81ec14feb892b4848b61c3d4888e9209da345b45f1e3d8a033a3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DonationRequestsModule-11fd15fe41e049bee9fe7ff6909aa8fbf0c707c2f36c955cbe280287c7e9026a5841ac36c4ff81ec14feb892b4848b61c3d4888e9209da345b45f1e3d8a033a3"' :
                                        'id="xs-injectables-links-module-DonationRequestsModule-11fd15fe41e049bee9fe7ff6909aa8fbf0c707c2f36c955cbe280287c7e9026a5841ac36c4ff81ec14feb892b4848b61c3d4888e9209da345b45f1e3d8a033a3"' }>
                                        <li class="link">
                                            <a href="injectables/DonationRequestsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DonationRequestsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DonationsModule.html" data-type="entity-link" >DonationsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DonationsModule-9ed4e1ce3e1bcb770f334a7218bf43590f4a359872348d0f6e72c2196593e831ed4312860b804a8d59bfa9f0de8cf052c478774979113474f994704e8d392bcf"' : 'data-bs-target="#xs-controllers-links-module-DonationsModule-9ed4e1ce3e1bcb770f334a7218bf43590f4a359872348d0f6e72c2196593e831ed4312860b804a8d59bfa9f0de8cf052c478774979113474f994704e8d392bcf"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DonationsModule-9ed4e1ce3e1bcb770f334a7218bf43590f4a359872348d0f6e72c2196593e831ed4312860b804a8d59bfa9f0de8cf052c478774979113474f994704e8d392bcf"' :
                                            'id="xs-controllers-links-module-DonationsModule-9ed4e1ce3e1bcb770f334a7218bf43590f4a359872348d0f6e72c2196593e831ed4312860b804a8d59bfa9f0de8cf052c478774979113474f994704e8d392bcf"' }>
                                            <li class="link">
                                                <a href="controllers/CADonationsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CADonationsController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/DonationsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DonationsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DonationsModule-9ed4e1ce3e1bcb770f334a7218bf43590f4a359872348d0f6e72c2196593e831ed4312860b804a8d59bfa9f0de8cf052c478774979113474f994704e8d392bcf"' : 'data-bs-target="#xs-injectables-links-module-DonationsModule-9ed4e1ce3e1bcb770f334a7218bf43590f4a359872348d0f6e72c2196593e831ed4312860b804a8d59bfa9f0de8cf052c478774979113474f994704e8d392bcf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DonationsModule-9ed4e1ce3e1bcb770f334a7218bf43590f4a359872348d0f6e72c2196593e831ed4312860b804a8d59bfa9f0de8cf052c478774979113474f994704e8d392bcf"' :
                                        'id="xs-injectables-links-module-DonationsModule-9ed4e1ce3e1bcb770f334a7218bf43590f4a359872348d0f6e72c2196593e831ed4312860b804a8d59bfa9f0de8cf052c478774979113474f994704e8d392bcf"' }>
                                        <li class="link">
                                            <a href="injectables/DonationsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DonationsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' :
                                        'id="xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-1535cf1d71dc99e3f17fe27c5f5f1d009a0abb81137965b5848d0ab2796e08a50c63a2bbfd92e35091f24f8e8dd14a113f51cb42668a789a086bcdc623b33d8e"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-1535cf1d71dc99e3f17fe27c5f5f1d009a0abb81137965b5848d0ab2796e08a50c63a2bbfd92e35091f24f8e8dd14a113f51cb42668a789a086bcdc623b33d8e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-1535cf1d71dc99e3f17fe27c5f5f1d009a0abb81137965b5848d0ab2796e08a50c63a2bbfd92e35091f24f8e8dd14a113f51cb42668a789a086bcdc623b33d8e"' :
                                            'id="xs-controllers-links-module-UsersModule-1535cf1d71dc99e3f17fe27c5f5f1d009a0abb81137965b5848d0ab2796e08a50c63a2bbfd92e35091f24f8e8dd14a113f51cb42668a789a086bcdc623b33d8e"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-1535cf1d71dc99e3f17fe27c5f5f1d009a0abb81137965b5848d0ab2796e08a50c63a2bbfd92e35091f24f8e8dd14a113f51cb42668a789a086bcdc623b33d8e"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-1535cf1d71dc99e3f17fe27c5f5f1d009a0abb81137965b5848d0ab2796e08a50c63a2bbfd92e35091f24f8e8dd14a113f51cb42668a789a086bcdc623b33d8e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-1535cf1d71dc99e3f17fe27c5f5f1d009a0abb81137965b5848d0ab2796e08a50c63a2bbfd92e35091f24f8e8dd14a113f51cb42668a789a086bcdc623b33d8e"' :
                                        'id="xs-injectables-links-module-UsersModule-1535cf1d71dc99e3f17fe27c5f5f1d009a0abb81137965b5848d0ab2796e08a50c63a2bbfd92e35091f24f8e8dd14a113f51cb42668a789a086bcdc623b33d8e"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/CentersController.html" data-type="entity-link" >CentersController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CentersController-2.html" data-type="entity-link" >CentersController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CitiesController.html" data-type="entity-link" >CitiesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CitiesController-2.html" data-type="entity-link" >CitiesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DonationRequestsController.html" data-type="entity-link" >DonationRequestsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DonationRequestsController-2.html" data-type="entity-link" >DonationRequestsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SADonationsController.html" data-type="entity-link" >SADonationsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController-1.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CAUpdateUserDto.html" data-type="entity-link" >CAUpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CenterEntity.html" data-type="entity-link" >CenterEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/CityEntity.html" data-type="entity-link" >CityEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommonEntity.html" data-type="entity-link" >CommonEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommonException.html" data-type="entity-link" >CommonException</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCenterDto.html" data-type="entity-link" >CreateCenterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCityDto.html" data-type="entity-link" >CreateCityDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDonationDto.html" data-type="entity-link" >CreateDonationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDonationRequestDto.html" data-type="entity-link" >CreateDonationRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DonationEntity.html" data-type="entity-link" >DonationEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/DonationRequestEntity.html" data-type="entity-link" >DonationRequestEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginInputDto.html" data-type="entity-link" >LoginInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginOutputDto.html" data-type="entity-link" >LoginOutputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SACreateUserDto.html" data-type="entity-link" >SACreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SAUpdateUserDto.html" data-type="entity-link" >SAUpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCenterDto.html" data-type="entity-link" >UpdateCenterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCityDto.html" data-type="entity-link" >UpdateCityDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDonationDto.html" data-type="entity-link" >UpdateDonationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDonationRequestDto.html" data-type="entity-link" >UpdateDonationRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserEntity.html" data-type="entity-link" >UserEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserPrivateEntity.html" data-type="entity-link" >UserPrivateEntity</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/IdInterceptor.html" data-type="entity-link" >IdInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});