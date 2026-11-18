const CONTENT = window.PLACE_CONTENT || {};
const NAV_ITEMS = [
  ['welcome','🚪','欢迎回家'], ['letters','💌','我的信'], ['memories','📷','回忆收藏'],
  ['future','🌙','未来星空'], ['mood','🛋️','今日心情'], ['cat','🐈','猫猫小窝'],
  ['gallery','🎨','画画角落'], ['goodnight','🕯️','一盏小灯'], ['fridge','🍮','幸福冰箱'],
  ['capsule','⏳','时间胶囊'], ['stars','⭐','星星彩蛋']
];
const $ = (id) => document.getElementById(id);
const el = (tag, cls, text) => { const node = document.createElement(tag); if (cls) node.className=cls; if (text !== undefined) node.textContent=text; return node; };
const nav = $('roomNav');
NAV_ITEMS.forEach(([key,icon,label]) => { const btn=el('button','room-chip'); btn.type='button';btn.append(el('span','',icon),document.createTextNode(label));btn.addEventListener('click',()=>showModal(key));nav.append(btn); });
let lastFocus=null;
const overlay = $('modalBackdrop');
const modal = overlay.querySelector('.modal');
const contentNode = $('modalContent');
function tileGrid(cards) {
  const grid=el('div','tile-grid');
  cards.forEach(item=>{
    const tile=el('div','tile'+((item.body||'').includes('[待') || (item.body||'').includes('[这里') || (item.body||'').includes('[以后') || (item.body||'').includes('[填') || (item.body||'').includes('[留给') ? ' is-placeholder':''));
    tile.append(el('div','tile-icon',item.emoji||'✿'),el('h4','',item.title||''),el('p','',item.body||''));grid.append(tile);
  });return grid;
}
function pictureGrid(photos) {
  const grid=el('div','polaroid-grid');
  photos.forEach((item,index)=>{
    const card=el('div','polaroid');const frame=el('div','polaroid-picture');
    if(item.image){const img=el('img');img.src=item.image;img.alt=item.caption||'一张回忆照片';img.loading='lazy';img.onerror=()=>{img.remove();frame.textContent='♡';};frame.append(img);}else frame.textContent='✿';
    card.append(frame,el('p','',item.caption||'一段小回忆'));if(item.image){card.setAttribute('role','button');card.tabIndex=0;card.setAttribute('aria-label','查看照片：'+(item.caption||''));const open=()=>openPhoto(photos,index);card.addEventListener('click',open);card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});}grid.append(card);
  });return grid;
}
function note(title,body){const box=el('div','paper-note');box.append(el('h4','',title),el('p','',body));return box;}
function showModal(key) {
  const data=CONTENT[key]; if(!data) return;
  lastFocus=document.activeElement;contentNode.replaceChildren();
  const heading=el('h3','',data.title||''); heading.id='modalTitle';
  contentNode.append(el('div','modal-emoji',data.emoji||'♡'),heading,el('p','modal-subtitle',data.subtitle||''));
  if(data.intro) contentNode.append(el('p','modal-intro',data.intro));
  if(data.note) contentNode.append(note(data.noteTitle||'给你的话',data.note));
  if(data.notes) data.notes.forEach(item=>contentNode.append(note(item.title,item.body)));
  if(data.cards) contentNode.append(tileGrid(data.cards));
  if(data.photos) contentNode.append(pictureGrid(data.photos));
  if(data.wishes){const list=el('ul','star-list');data.wishes.forEach(w=>list.append(el('li','',w)));contentNode.append(list);}
  if(data.moods){
    const grid=el('div','mood-grid'); const reply=el('div','mood-reply','选一个今天的心情吧 ♡');
    data.moods.forEach(item=>{const btn=el('button','mood-button',`${item.emoji} ${item.label}`);btn.type='button';btn.addEventListener('click',()=>{grid.querySelectorAll('button').forEach(b=>b.classList.remove('is-active'));btn.classList.add('is-active');reply.textContent=item.reply;});grid.append(btn);});
    contentNode.append(grid,reply);
  }
  if(data.phrases){const sentence=el('div','surprise-text',data.phrases[0]);const btn=el('button','mini-button','再接一颗星星 ✧');btn.type='button';let previous=0;btn.addEventListener('click',()=>{if(data.phrases.length<2)return;let next=previous;while(next===previous)next=Math.floor(Math.random()*data.phrases.length);previous=next;sentence.textContent=data.phrases[next];});contentNode.append(sentence,btn);}
  overlay.hidden=false;document.body.classList.add('modal-open');modal.scrollTop=0;modal.focus();
}
function hideModal(){overlay.hidden=true;document.body.classList.remove('modal-open');if(lastFocus && lastFocus.focus)lastFocus.focus();}
$('closeModal').addEventListener('click',hideModal);
overlay.addEventListener('click',event=>{if(event.target===overlay)hideModal();});
document.addEventListener('keydown',event=>{if(overlay.hidden)return;if(event.key==='Escape')hideModal();if(event.key==='Tab'){const buttons=[...modal.querySelectorAll('button')];const first=buttons[0],last=buttons[buttons.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}}});
const tooltip=$('sceneTooltip');const scene=$('roomScene');
scene.querySelectorAll('[data-open]').forEach(g=>{
  const open=()=>showModal(g.dataset.open);
  g.addEventListener('click',open);
  g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});
  g.addEventListener('pointerenter',()=>{const rect=g.getBoundingClientRect();const parent=scene.parentElement.getBoundingClientRect();tooltip.textContent=g.getAttribute('aria-label');tooltip.style.left=(rect.left+rect.width/2-parent.left)+'px';tooltip.style.top=(rect.top-parent.top-7)+'px';tooltip.classList.add('show');});
  g.addEventListener('pointerleave',()=>tooltip.classList.remove('show'));
});
const music=$('bgMusic'); music.volume=.38;
let playing=false;
function updateMusic(){ $('musicToggle').classList.toggle('is-playing',playing);$('musicLabel').textContent=playing?'音乐开':'音乐关';$('musicToggle').setAttribute('aria-label',playing?'暂停背景音乐':'播放背景音乐'); }
async function setMusic(on){try{if(on){await music.play();playing=true;}else{music.pause();playing=false;}}catch(error){playing=false;}updateMusic();}
$('musicToggle').addEventListener('click',()=>setMusic(!playing));
$('enterButton').addEventListener('click',()=>{
  $('intro').hidden=true;$('littleRoom').hidden=false;
  window.scrollTo({top:0,behavior:'auto'});
  setMusic(true);
});
// 如果网址里有 #room，可以直接打开小屋（方便自己预览）。
if(location.hash==='#room'){$('intro').hidden=true;$('littleRoom').hidden=false;}

// 大图查看器：只展示你已经提供的照片，不会自动上传其他图片。
let activePhotos=[],activePhotoIndex=0;
const photoBackdrop=$('photoBackdrop');
function renderPhoto(){const p=activePhotos[activePhotoIndex];if(!p)return;$('photoBig').src=p.image;$('photoBig').alt=p.caption||'照片';$('photoCaption').textContent=(p.caption||'我们的回忆')+'  ·  '+(activePhotoIndex+1)+' / '+activePhotos.length;}
function openPhoto(items,index){activePhotos=items.filter(p=>p.image);const target=items[index];activePhotoIndex=Math.max(0,activePhotos.indexOf(target));renderPhoto();photoBackdrop.hidden=false;document.body.style.overflow='hidden';}
function closePhoto(){photoBackdrop.hidden=true;$('photoBig').removeAttribute('src');document.body.style.overflow='';}
$('photoClose').addEventListener('click',closePhoto);
$('photoPrev').addEventListener('click',()=>{activePhotoIndex=(activePhotoIndex-1+activePhotos.length)%activePhotos.length;renderPhoto();});
$('photoNext').addEventListener('click',()=>{activePhotoIndex=(activePhotoIndex+1)%activePhotos.length;renderPhoto();});
photoBackdrop.addEventListener('click',e=>{if(e.target===photoBackdrop)closePhoto();});
document.addEventListener('keydown',e=>{if(photoBackdrop.hidden)return;if(e.key==='Escape')closePhoto();if(e.key==='ArrowLeft')$('photoPrev').click();if(e.key==='ArrowRight')$('photoNext').click();});