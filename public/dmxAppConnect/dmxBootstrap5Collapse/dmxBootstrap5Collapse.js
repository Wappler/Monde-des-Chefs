/*!
 DMXzone Bootstrap 5 Collapse
 Version: 1.0.0
 (c) 2021 DMXzone.com
 @build 2021-01-06 15:01:43
 */
dmx.Component("bs5-collapse",{initialData:{collapsed:!0},attributes:{show:{type:Boolean,default:!1}},methods:{toggle:function(){this.instance.toggle()},show:function(){this.instance.show()},hide:function(){this.instance.hide()}},events:{show:Event,shown:Event,hide:Event,hidden:Event},render:function(s){this.$node=s,this.$parse(),this.$node.classList.add("collapse"),this.$node.addEventListener("show.bs.collapse",this.dispatchEvent.bind(this,"show")),this.$node.addEventListener("shown.bs.collapse",this.dispatchEvent.bind(this,"shown")),this.$node.addEventListener("hide.bs.collapse",this.dispatchEvent.bind(this,"hide")),this.$node.addEventListener("hidden.bs.collapse",this.dispatchEvent.bind(this,"hidden")),this.$node.addEventListener("shown.bs.collapse",this.onShown.bind(this)),this.$node.addEventListener("hidden.bs.collapse",this.onHidden.bind(this)),this.instance=new bootstrap.Collapse(this.$node,{toggle:!1}),this.update({})},onShown:function(){this.set("collapsed",!1)},onHidden:function(){this.set("collapsed",!0)},update:function(s){s.show!=this.props.show&&(this.$node.classList.toggle("show",this.props.show),this.set("collapsed",!this.props.show))}});
//# sourceMappingURL=../maps/dmxBootstrap5Collapse.js.map
