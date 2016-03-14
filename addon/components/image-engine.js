/* ImageEngine ember addon */
import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'img',
    attributeBindings: ['src'],
    imgEngUrl: 'imgeng.in/',
    didInsertElement: function() {
        try {
            let options = "";
            let prop = "";
            let ImgSrc = this.get('ImgSrc');
            let urlToBeRendered = "";
            let imgEngUrl = this.get('imgEngUrl');
            let protocol = [],
                imageProtocol = '',
                renderUrl = '';
            let token = "",
                isLite = false;
            let configObject = {};
            if (!ImgSrc) {
                return "";
            }
            // checking if token is registered
            try {
                configObject = EmberENV.ImageEngine;
                token = configObject.token;
                isLite = configObject.is_lite ? true : false;
            } catch (e) {
                //ignore
            }
            // matching images protocol
            try {
                protocol = ImgSrc.split("//");
                if(protocol[0].indexOf('http')===-1){
                  imageProtocol = 'http:';
                  ImgSrc = (ImgSrc.indexOf('//') ===-1) ? ('http://'+ImgSrc)  : (imageProtocol+ImgSrc);
                }else{
                  imageProtocol = protocol[0] ? (protocol[0]) : 'http:';  
                }
                

            } catch (e) {
                imageProtocol = 'http:';
                console.log(e);
            }

            // adding token to the URL
            if (token) {
                imgEngUrl = "//" + token + (isLite?'.lite.imgeng.in/':'.imgeng.in/');
                imgEngUrl = imageProtocol + imgEngUrl;


            } else {
                imgEngUrl = imageProtocol ? (imageProtocol + "//try." + imgEngUrl) : ("http://try." + imgEngUrl);
            }

            //Applying ImageEngine options
            for (prop in this.get('attrs')) {
                if (!(prop === 'ImgSrc')) { options = options + (prop + "_" + this.attrs[prop] + "/"); }
            }
            renderUrl = imgEngUrl + options + ImgSrc;
            this.set('src', renderUrl);
        } catch (e) { console.log(e); }


    }


});
