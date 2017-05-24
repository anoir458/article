class Fighter{
	constructor(name, power, health){
		this.name = name;
		this.power = power;
		this.health = health;
	}

	setDamage(damage){
		this.health -= damage;
	}

	hit(enemy, point){

		let damage = point * this.power;
		enemy.setDamage(damage);

	}
};

class ImprovedFighter extends Fighter{
	doubleHit(enemy, point){
		super.hit(enemy, point);
	}
};

let fighter = new Fighter("Fighter",10,100);
let improvedFighter = new ImprovedFighter("ImprovedFighter",10,100);

let fight = (fighter, improvedFighter, ...point)=>{
	fighter.hit(improvedFighter, point[0]);
	improvedFighter.doubleHit(fighter, point[0]*2);
	
	if(fighter.health !=0 && improvedFighter.health != 0){
		fight(fighter, improvedFighter, ...point);
	}else{
		console.log(`Health of Fighter ${fighter.health}`);
		console.log(`Health of ImprovedFighter ${improvedFighter.health}`);
	}
	
};

fight(fighter, improvedFighter, 1, 2, 3);
