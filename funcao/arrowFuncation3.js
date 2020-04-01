let comparaComThis = function(param) {
  console.log(this === param);
};

comparaComThis(global);

const obj = {};

comparaComThis = comparaComThis.bind(obj);
comparaComThis();
comparaComThis(global);
comparaComThis(obj);

let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow('comparaComThisArrow:', global);
comparaComThisArrow(module.exports);

comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);
comparaComThisArrow(module.exports);
