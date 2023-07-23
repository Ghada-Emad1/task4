let close=document.getElementById('close');
let showing_list=document.getElementById('show-list');
let show_feat=document.getElementById('show-feat');
let show_comp=document.getElementById('show-comp');
let body=document.getElementById('body');
function Closing(e){
    if(e.name==='menu'){
        e.name='close'
        showing_list.classList.toggle('hidden');
        body.classList.add;
    }else{
        e.name='menu'
        showing_list.classList.toggle('hidden')
        
    }
}
function Show_feat(e){
    if(e.name==="chevron-down"){
        e.name="chevron-up"
        show_feat.classList.toggle('hidden')
    }else{
        e.name="chevron-down"
        show_feat.classList.toggle('hidden')
    }
}
function Show_comp(e){
    if(e.name==="chevron-down"){
        e.name="chevron-up"
        show_comp.classList.toggle('hidden')
    }else{
        e.name="chevron-down"
        show_comp.classList.toggle('hidden')
    }
}