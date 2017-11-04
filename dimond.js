printDiamond = function(h, c) {
	g = function(i, c) {
			if( i === 0 )
				return "";
			if( i === 1)
				return c;
			return c + g(i-1,c);
		};
	f1 = function(h, i, c){		
		if(i === h)
			return g(i, c) + "\n";
		return g((h-i)/2, " ") + g(i, c) + g((h-i)/2, " ") + "\n" + f1(h, i+2, c);		
	};
	f2 = function(h, i, c){		
		if(i <= 0)
			return "";
		return g((h-i)/2, " ") + g(i, c) + g((h-i)/2, " ") + "\n" + f2(h, i-2, c);		
	};
  if(h <= 0)
	  return "";
  if(h % 2 === 0)
     h = h+1;
  return f1(h, 1, c) + f2(h, h-2, c);
};

printDiamond(5, "@");


printDiamond = function(h, c) {
	g = function(i, c) {
		if( i === 0 )
			return "";
		
		let str = "";
  		for(let j = 1; j <= i; j++)
			str += c;
		
		return str;	
	};
	
	if(h <= 0)
	  return "";
	if(h % 2 === 0)
     h = h+1;
	let str = "";
	for(let i = 1; i <= h; i += 2){
		str += g((h-i)/2, " ") + g(i, c) + g((h-i)/2, " ") + "\n";
	}
	for(let i = h-2; i >= 0; i -= 2){
		str += g((h-i)/2, " ") + g(i, c) + g((h-i)/2, " ") + "\n";
	}
	return str;
};

printDiamond(5, "@");
