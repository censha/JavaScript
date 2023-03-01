let answerNode = document.querySelector(`#answer`);
let checkNode = document.querySelector(`#check`);
let resultNode = document.querySelector(`#result`);

// кнопки с буквами
let a = document.querySelector(`#a`);
let b = document.querySelector(`#b`);
let c = document.querySelector(`#c`);
let d = document.querySelector(`#d`);
let e = document.querySelector(`#e`);
let f = document.querySelector(`#f`);
let g = document.querySelector(`#g`);
let h = document.querySelector(`#h`);
let i = document.querySelector(`#i`);
let j = document.querySelector(`#j`);
let k = document.querySelector(`#k`);
let l = document.querySelector(`#l`);
let m = document.querySelector(`#m`);
let n = document.querySelector(`#n`);
let o = document.querySelector(`#o`);
let p = document.querySelector(`#p`);
let q = document.querySelector(`#q`);
let r = document.querySelector(`#r`);
let s = document.querySelector(`#s`);
let t = document.querySelector(`#t`);
let u = document.querySelector(`#u`);
let v = document.querySelector(`#v`);
let w = document.querySelector(`#w`);
let x = document.querySelector(`#x`);
let y = document.querySelector(`#y`);
let z = document.querySelector(`#z`);


// Клик по кнопке проверить
checkNode.addEventListener(`click`, function () {
    if(answerNode.innerText === 'cat') resultNode.innerText = 'Верно';
    else resultNode.innerText = 'Не верно'
});

// Клик по кнопкам с буквами
a.addEventListener(`click`, function () {
    clicklock('a');
    b.disabled = 'true';});
b.addEventListener(`click`, function () {
    clicklock('b');
    a.disabled = 'true';});
c.addEventListener(`click`, function () {
    clicklock('c');
    c.disabled = 'true';});
d.addEventListener(`click`, function () {
    clicklock('d');
    d.disabled = 'true';
});
e.addEventListener(`click`, function () {
    clicklock('e');
    e.disabled = 'true';
});
f.addEventListener(`click`, function () {
    clicklock('f');
    f.disabled = 'true';
});
g.addEventListener(`click`, function () {
    clicklock('g');
    g.disabled = 'true';
});
h.addEventListener(`click`, function () {
    clicklock('h');
    h.disabled = 'true';
});
i.addEventListener(`click`, function () {
    clicklock('i');
    i.disabled = 'true';
});
j.addEventListener(`click`, function () {
    clicklock('j');
    j.disabled = 'true';
});
k.addEventListener(`click`, function () {
    clicklock('k');
    k.disabled = 'true';
});
l.addEventListener(`click`, function () {
    clicklock('l');
    l.disabled = 'true';
});
m.addEventListener(`click`, function () {
    clicklock('m');
    m.disabled = 'true';
});
n.addEventListener(`click`, function () {
    clicklock('n');
    n.disabled = 'true';
});
o.addEventListener(`click`, function () {
    clicklock('o');
    o.disabled = 'true';
});
p.addEventListener(`click`, function () {
    clicklock('p');
    p.disabled = 'true';
});
q.addEventListener(`click`, function () {
    clicklock('q');
    q.disabled = 'true';
});
r.addEventListener(`click`, function () {
    clicklock('r');
    r.disabled = 'true';
});
s.addEventListener(`click`, function () {
    clicklock('s');
    s.disabled = 'true';
});
t.addEventListener(`click`, function () {
    clicklock('t');
    t.disabled = 'true';
});
u.addEventListener(`click`, function () {
    clicklock('u');
    u.disabled = 'true';
});
v.addEventListener(`click`, function () {
    clicklock('v');
    v.disabled = 'true';
});
w.addEventListener(`click`, function () {
    clicklock('w');
    w.disabled = 'true';
});
x.addEventListener(`click`, function () {
    clicklock('x');
    x.disabled = 'true';
});
y.addEventListener(`click`, function () {
    clicklock('y');
    y.disabled = 'true';
});
z.addEventListener(`click`, function () {
    clicklock('z');
    z.disabled = 'true';
});

function clicklock(tms){
    console.log(tms);
    answerNode.innerText += tms;
}