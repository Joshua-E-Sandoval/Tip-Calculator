let peoples = document.getElementById("people");
peoples.innerHTML = "peoples";

let tips = 0;

let people = new Array();
people.push(new Object());
people.pop();

class Person{
	constructor(){
		this.name = '';
		this.hours = 0;
		this.tips = 0;
		this.id;
		this.label = "";
	}
	SetPerson(name, hours, tips, id){
		this.name = name;
		this.hours = hours;
		this.tips = tips;
		this.id = id;
		this.label = "<input type = 'button' value = " + name.toString() + " onclick = Person.SetHours("+ this.id + ") />";	
	}

	static SetHours(num){
		people[num].hours = prompt("Hours of" + Person.GetName(people[num]).toString());
		console.log(people[num].name);
		Update();
	}

	static GetLabel(Person_){
		return Person_.label;
	}

	static GetHours(Person_){
		return Person_.hours;
	}

	static GetTips(Person_){
		return Person_.tips;
	}

	static GetName(Person_){
		return Person_.name;
	}

	static setLabel(Person_){
		Person_.label = "<input type = 'button' value = " + Person.GetName(Person_) + " onclick = 'Person.SetHours()' />";
	}
	
	static SetTip(Person_, num){
		Person_.tips = num;
	}
}


function addPerson(name, hours, tips){
	let aPerson = new Person();
	aPerson.SetPerson(name, hours, tips, people.length);
	people.push(aPerson);
	Update();
}

function addPersonButton(){
	let aPerson = new Person();
	let name = prompt("name");
	let hours = prompt("hours");
	aPerson.SetPerson(name, hours, 0, people.length);
	people.push(aPerson);
	Update();
}

function Update(){
	peoples.innerHTML = '';
	for(x of people){
		peoples.innerHTML = peoples.innerHTML + Person.GetLabel(x) + "--- Hours: " + Person.GetHours(x) + " -- Tips: " + Person.GetTips(x) + "<br>";
	}
	console.log(peoples.innerHTML.toString());
}

function setTips(){
	tips = prompt('total tips');
	CalculateTips();
}

function CalculateTips(){
	let totalHours = 0.0;
	let ratio = 0;
	let check = 0;
	if(people.length != 0){
		for(x of people){
			totalHours = parseInt(totalHours, 10) + parseInt( Person.GetHours(x) , 10);
		}
		ratio = tips / totalHours;
		console.log(totalHours, ratio);
		for(let i = 0; i < people.length; i++){
			check = (+check) + (+Person.GetHours(people[i])) * (+ratio);
			Person.SetTip(people[i], (+Person.GetHours(people[i])) * (+ratio))
		}		
		Update();
		let aCheck = document.getElementById("check");
		aCheck.innerHTML = "Total Hours = " + totalHours.toString() + "<br>Tip Ratio " +  ratio.toString() + "<br> Tips added by Employee " + check.toString();
	}
}