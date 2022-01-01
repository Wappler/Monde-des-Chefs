/*!
 DMXzone Bootstrap 5 Modal
 Version: 1.0.1
 (c) 2021 DMXzone.com
 @build 2021-04-08 13:41:56
 */
dmx.Component("bs5-modal",{attributes:{nobackdrop:{type:Boolean,default:!1},nocloseonclick:{type:Boolean,default:!1},nokeyboard:{type:Boolean,default:!1},nofocus:{type:Boolean,default:!1},show:{type:Boolean,default:!1}},methods:{toggle:function(){this.instance.toggle()},show:function(){this.instance.show()},hide:function(){this.instance.hide()},update:function(){this.instance.handleUpdate()}},events:{show:Event,shown:Event,hide:Event,hidden:Event},render:function(t){this.$node=t,this.$parse(),this.$node.addEventListener("show.bs.modal",this.dispatchEvent.bind(this,"show")),this.$node.addEventListener("shown.bs.modal",this.dispatchEvent.bind(this,"shown")),this.$node.addEventListener("hide.bs.modal",this.dispatchEvent.bind(this,"hide")),this.$node.addEventListener("hidden.bs.modal",this.dispatchEvent.bind(this,"hidden")),this.update({})},update:function(t){JSON.stringify(t)!=JSON.stringify(this.props)&&(this.instance&&this.instance.dispose(),this.instance=new bootstrap.Modal(this.$node,{backdrop:!this.props.nobackdrop&&this.props.nocloseonclick?"static":!this.props.nobackdrop,keyboard:!this.props.nokeyboard,focus:!this.props.nofocus}),this.props.show&&this.instance.show())}});
//# sourceMappingURL=../maps/dmxBootstrap5Modal.js.map
