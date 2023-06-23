/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[9],{493:function(ya,ua,r){function pa(fa){fa.Oa();fa.advance();var ea=fa.current.textContent;fa.ob();return ea}function na(fa){var ea=[];for(fa.Oa();fa.advance();){var oa=fa.Sa();"field"===oa?ea.push(String(fa.ha("name"))):Object(b.j)("unrecognised field list element: "+oa)}fa.ob();return ea}function ma(fa,ea){return ea?"false"!==fa:"true"===fa}function ka(fa,ea){var oa=fa.Sa();switch(oa){case "javascript":return{name:"JavaScript",
javascript:fa.current.textContent};case "uri":return{name:"URI",uri:fa.ha("uri")};case "goto":oa=null;fa.Oa();if(fa.advance()){var ia=fa.ha("fit");oa={page:fa.ha("page"),fit:ia};if("0"===oa.page)Object(b.j)("null page encountered in dest");else switch(ea=ea(Number(oa.page)),ia){case "Fit":case "FitB":break;case "FitH":case "FitBH":oa.top=ea.ta({x:0,y:fa.ha("top")||0}).y;break;case "FitV":case "FitBV":oa.left=ea.ta({x:fa.ha("left")||0,y:0}).x;break;case "FitR":ia=ea.ta({x:fa.ha("left")||0,y:fa.ha("top")||
0});ea=ea.ta({x:fa.ha("right")||0,y:fa.ha("bottom")||0});ea=new w.d(ia.x,ia.y,ea.x,ea.y);oa.top=ea.y1;oa.left=ea.x1;oa.bottom=ea.y2;oa.right=ea.x2;break;case "XYZ":ia=ea.ta({x:fa.ha("left")||0,y:fa.ha("top")||0});oa.top=ia.y;oa.left=ia.x;oa.zoom=fa.ha("zoom")||0;break;default:Object(b.j)("unknown dest fit: "+ia)}oa={name:"GoTo",dest:oa}}else Object(b.j)("missing dest in GoTo action");fa.ob();return oa;case "submit-form":oa={name:"SubmitForm",url:fa.ha("url"),format:fa.ha("format"),method:fa.ha("method")||
"POST",exclude:ma(fa.ha("exclude"),!1)};ea=fa.ha("flags");oa.flags=ea?ea.split(" "):[];for(fa.Oa();fa.advance();)switch(ea=fa.Sa(),ea){case "fields":oa.fields=na(fa);break;default:Object(b.j)("unrecognised submit-form child: "+ea)}fa.ob();return oa;case "reset-form":oa={name:"ResetForm",exclude:ma(fa.ha("exclude"),!1)};for(fa.Oa();fa.advance();)switch(ea=fa.Sa(),ea){case "fields":oa.fields=na(fa);break;default:Object(b.j)("unrecognised reset-form child: "+ea)}fa.ob();return oa;case "hide":oa={name:"Hide",
hide:ma(fa.ha("hide"),!0)};for(fa.Oa();fa.advance();)switch(ea=fa.Sa(),ea){case "fields":oa.fields=na(fa);break;default:Object(b.j)("unrecognised hide child: "+ea)}fa.ob();return oa;case "named":return{name:"Named",action:fa.ha("name")};default:Object(b.j)("Encountered unexpected action type: "+oa)}return null}function ja(fa,ea,oa){var ia={};for(fa.Oa();fa.advance();){var la=fa.Sa();switch(la){case "action":la=fa.ha("trigger");if(ea?-1!==ea.indexOf(la):1){ia[la]=[];for(fa.Oa();fa.advance();){var ra=
ka(fa,oa);Object(h.isNull)(ra)||ia[la].push(ra)}fa.ob()}else Object(b.j)("encountered unexpected trigger on field: "+la);break;default:Object(b.j)("encountered unknown action child: "+la)}}fa.ob();return ia}function ha(fa){return new x.a(fa.ha("r")||0,fa.ha("g")||0,fa.ha("b")||0,fa.ha("a")||1)}function aa(fa,ea){var oa=fa.ha("name"),ia=fa.ha("type")||"Type1",la=fa.ha("size"),ra=ea.ta({x:0,y:0});la=ea.ta({x:Number(la),y:0});ea=ra.x-la.x;ra=ra.y-la.y;oa={name:oa,type:ia,size:Math.sqrt(ea*ea+ra*ra)||
0,strokeColor:[0,0,0],fillColor:[0,0,0]};for(fa.Oa();fa.advance();)switch(ia=fa.Sa(),ia){case "stroke-color":oa.strokeColor=ha(fa);break;case "fill-color":oa.fillColor=ha(fa);break;default:Object(b.j)("unrecognised font child: "+ia)}fa.ob();return oa}function z(fa){var ea=[];for(fa.Oa();fa.advance();){var oa=fa.Sa();switch(oa){case "option":oa=ea;var ia=oa.push;var la=fa;la={value:la.ha("value"),displayValue:la.ha("display-value")||void 0};ia.call(oa,la);break;default:Object(b.j)("unrecognised options child: "+
oa)}}fa.ob();return ea}function n(fa,ea){var oa=fa.ha("name"),ia={type:fa.ha("type"),quadding:fa.ha("quadding")||"Left-justified",maxLen:fa.ha("max-len")||-1},la=fa.ha("flags");Object(h.isString)(la)&&(ia.flags=la.split(" "));for(fa.Oa();fa.advance();)switch(la=fa.Sa(),la){case "actions":ia.actions=ja(fa,["C","F","K","V"],function(){return ea});break;case "default-value":ia.defaultValue=pa(fa);break;case "font":ia.font=aa(fa,ea);break;case "options":ia.options=z(fa);break;default:Object(b.j)("unknown field child: "+
la)}fa.ob();return new window.da.Annotations.ia.ra(oa,ia)}function f(fa,ea){switch(fa.type){case "Tx":try{if(Object(ca.c)(fa.actions))return new e.a.DatePickerWidgetAnnotation(fa,ea)}catch(oa){Object(b.j)(oa)}return new e.a.TextWidgetAnnotation(fa,ea);case "Ch":return fa.flags.get(ba.WidgetFlags.COMBO)?new e.a.ChoiceWidgetAnnotation(fa,ea):new e.a.ListWidgetAnnotation(fa,ea);case "Btn":return fa.flags.get(ba.WidgetFlags.PUSH_BUTTON)?new e.a.PushButtonWidgetAnnotation(fa,ea):fa.flags.get(ba.WidgetFlags.RADIO)?
new e.a.RadioButtonWidgetAnnotation(fa,ea):new e.a.CheckButtonWidgetAnnotation(fa,ea);case "Sig":return new e.a.SignatureWidgetAnnotation(fa,ea);default:Object(b.j)("Unrecognised field type: "+fa.type)}return null}function a(fa,ea,oa,ia){var la=[],ra={};fa.Oa();var qa=[],sa={},wa=[];Object(y.a)(function(){if(fa.advance()){var Aa=fa.Sa();switch(Aa){case "calculation-order":qa="calculation-order"===fa.Sa()?na(fa):[];break;case "document-actions":sa=ja(fa,["Init","Open"],ea);break;case "pages":Aa=[];
for(fa.Oa();fa.advance();){var Ha=fa.Sa();switch(Ha){case "page":Ha=Aa;var za=Ha.push,Ja=fa,Ta=ea,Ka={number:Ja.ha("number")};for(Ja.Oa();Ja.advance();){var Ma=Ja.Sa();switch(Ma){case "actions":Ka.actions=ja(Ja,["O","C"],Ta);break;default:Object(b.j)("unrecognised page child: "+Ma)}}Ja.ob();za.call(Ha,Ka);break;default:Object(b.j)("unrecognised page child: "+Ha)}}fa.ob();wa=Aa;break;case "field":Ha=n(fa,ea(1));ra[Ha.name]=Ha;break;case "widget":Aa={border:{style:"Solid",width:1},backgroundColor:[],
fieldName:fa.ha("field"),page:fa.ha("page"),index:fa.ha("index")||0,rotation:fa.ha("rotation")||0,flags:[],isImporting:!0};(Ha=fa.ha("appearance"))&&(Aa.appearance=Ha);(Ha=fa.ha("flags"))&&(Aa.flags=Ha.split(" "));for(fa.Oa();fa.advance();)switch(Ha=fa.Sa(),Ha){case "rect":za=fa;Ja=ea(Number(Aa.page));Ha=Ja.ta({x:za.ha("x1")||0,y:za.ha("y1")||0});za=Ja.ta({x:za.ha("x2")||0,y:za.ha("y2")||0});Ha=new w.d(Ha.x,Ha.y,za.x,za.y);Ha.normalize();Aa.rect={x1:Ha.x1,y1:Ha.y1,x2:Ha.x2,y2:Ha.y2};break;case "border":Ha=
fa;za={style:Ha.ha("style")||"Solid",width:Ha.ha("width")||1,color:[0,0,0]};for(Ha.Oa();Ha.advance();)switch(Ja=Ha.Sa(),Ja){case "color":za.color=ha(Ha);break;default:Object(b.j)("unrecognised border child: "+Ja)}Ha.ob();Aa.border=za;break;case "background-color":Aa.backgroundColor=ha(fa);break;case "actions":Aa.actions=ja(fa,"E X D U Fo Bl PO PC PV PI".split(" "),ea);break;case "appearances":Ha=fa;za=Object(ca.b)(Aa,"appearances");for(Ha.Oa();Ha.advance();)if(Ja=Ha.Sa(),"appearance"===Ja){Ja=Ha.ha("name");
Ta=Object(ca.b)(za,Ja);Ja=Ha;for(Ja.Oa();Ja.advance();)switch(Ka=Ja.Sa(),Ka){case "Normal":Object(ca.b)(Ta,"Normal").data=Ja.current.textContent;break;default:Object(b.j)("unexpected appearance state: ",Ka)}Ja.ob()}else Object(b.j)("unexpected appearances child: "+Ja);Ha.ob();break;case "extra":Ha=fa;za=ea;Ja={};for(Ha.Oa();Ha.advance();)switch(Ta=Ha.Sa(),Ta){case "font":Ja.font=aa(Ha,za(1));break;default:Object(b.j)("unrecognised extra child: "+Ta)}Ha.ob();Ha=Ja;Ha.font&&(Aa.font=Ha.font);break;
case "captions":za=fa;Ha={};(Ja=za.ha("Normal"))&&(Ha.Normal=Ja);(Ja=za.ha("Rollover"))&&(Ha.Rollover=Ja);(za=za.ha("Down"))&&(Ha.Down=za);Aa.captions=Ha;break;default:Object(b.j)("unrecognised widget child: "+Ha)}fa.ob();(Ha=ra[Aa.fieldName])?(Aa=f(Ha,Aa),la.push(Aa)):Object(b.j)("ignoring widget with no corresponding field data: "+Aa.fieldName);break;default:Object(b.j)("Unknown element encountered in PDFInfo: "+Aa)}return!0}return!1},function(){fa.ob();oa({calculationOrder:qa,widgets:la,fields:ra,
documentActions:sa,pages:wa,custom:[]})},ia)}r.r(ua);r.d(ua,"parse",function(){return a});var b=r(3),h=r(1);r.n(h);var e=r(129),w=r(4),x=r(7),y=r(21),ca=r(114),ba=r(18)}}]);}).call(this || window)
