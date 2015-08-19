var $home = angular.module('home',[]);
var counter=0;
$home.controller('homeCtrl', ['$scope'
    , function ($scope) {

        $scope.logoUrl = "https://s3.amazonaws.com/kaleo.live/mobile/whitelabel/56898399-b378-4ca8-bab7-e75aba7c43a7.png";
        $scope.images = ["http://rack.3.mshcdn.com/media/ZgkyMDEzLzEyLzAzL2M3L01vYmlsZVBsYXRmLmE5NjIxLmpwZwpwCXRodW1iCTk1MHg1MzQjCmUJanBn/4412ed4b/9e6/MobilePlatforms.jpg"];

        for(var i=0;i< $scope.images.length ;i++)
            $scope.images[i]= buildfire.imageLib.resizeImage($scope.images[i],{width:400});


        $scope.appContentId = 123;

        var fn = function(w){
            buildfire.navigation.navigateTo(w.widgetId,w.instanceId, w.title);
        };
        $scope.click=fn;

        var widgets = [
            { title:"Example", widgetId:'examplePlugin',instanceId:123, icon:"https://lh5.ggpht.com/Q9tsVSAIAQIYHju3mG_1oafAX8sVWHF_rNM-uqvD-7gyedk_k04W_XifaW09VRVINg=w300"}
            ,{title:"Simple Search", widgetId:'exampleSimpleSearch',instanceId:321, icon:"https://www.bellbanks.com/wp-content/uploads/2013/02/mobile-app-icon.jpg", requiresConnection:true}
            ,{title:"People", widgetId:'peoplePlugin',instanceId:321, icon:"http://www.allthingsscene.co/wp-content/uploads/2014/07/App-icon.png", requiresConnection:true}
            ,{title:"Contact Us", widgetId:'contactUsPlugin',instanceId:321, icon:"http://www.codeandlogic.com/media/home/appIcon.png", requiresConnection:true}
            ,{title:"Text", widgetId:'textPlugin',instanceId:654645, icon:"http://icons.iconarchive.com/icons/fasticon/twitter-square/256/twitter-square-icon.png", requiresConnection:true}


        ];


        var iconSize=50,circleRadious=40;

        for(var i=0;i< widgets.length ;i++)
            widgets[i].icon= buildfire.imageLib.resizeImage(widgets[i].icon,{width:iconSize});

        $scope.widgets=widgets;

        function initMenu(){

            var items = document.querySelectorAll('a.circleIcon');



            for(var i = 0, l = items.length; i < l; i++) {
                items[i].style.left = (iconSize - circleRadious*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";

                items[i].style.top = (iconSize + circleRadious*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
            }

            document.querySelector('.menu-button').onclick = function(e) {
                e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
                return;
            }
        }
        setTimeout(initMenu,500);
    }
]);