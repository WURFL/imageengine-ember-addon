/* ImageEngine ember addon */ import Ember from 'ember'; export default Ember.Component.extend({tagName: 'img', attributeBindings: ['src'], imgEngUrl: 'http://try.imgeng.in/', didInsertElement: function() {try {let options = ""; let prop = ""; let renderUrl = ""; for (prop in this.get('attrs')) {if(!(prop === 'ImgSrc')){options = options + (prop + "_" + this.attrs[prop] + "/"); } } renderUrl = this.get('imgEngUrl') + options + this.get('ImgSrc'); this.set('src', renderUrl); } catch (e) {console.log(e); } } });