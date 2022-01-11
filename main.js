//Tip Calculator meant to seperate money based on hours worked (not for servers)

//Initializes page and 
let peoples = document.getElementById("people");
console.log(peoples.childNodes.length);
let tips = 0;

let people = new Array();
people.push(new Object());
people.pop();

let rounded = false;

class Person {
	constructor() {
		this.name = '';
		this.hours = 0;
		this.tips = 0;
		this.id;
		this.label = "";
	}

	SetPerson(name, hours, tips, id) {
		this.name = name;
		this.hours = hours;
		this.tips = tips;
		this.id = id;
		this.label = "<p><input class='aButton' type = 'button' value = " + name.toString() + " onclick = Person.SetHours(" + this.id + ") />";
	}

	
	static SetHours(num){
		people[num].hours = prompt("Hours of" + Person.GetName(people[num]).toString());
		console.log(people[num].name);
		Update();
	}

	static GetName(Person_){
		return Person_.name;
	}

	static setLabel(Person_){
		Person_.label = "<p><input class='aButton' type = 'button' value = " + Person.GetName(Person_) + " onclick = 'Person.SetHours()' />";
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
	let temp = document.createElement('p');
	temp.className = 'aPerson';
	temp.id = name;
	temp.innerHTML = aPerson.label + "--- Hours: " + aPerson.hours + " -- Tips: " + aPerson.tips+ "</p>" ;

	peoples.appendChild(temp);
	people.push(aPerson);
}

function Update(){
	for (let x = 0; x < people.length; x++){
		let temp = people[x];
		peoples.childNodes[x + 1].innerHTML =  temp.label +  "--- Hours: " + temp.hours + " -- Tips: " + makeToInt(temp.tips) + "</p>";
	}
	console.log(peoples.childNodes.length);
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
		for (let x = 0; x < people.length; x++){
			let temp = people[x];
			console.log(temp.hours);
			totalHours = parseFloat(totalHours, 10) + parseFloat( temp.hours , 10);
		}
		ratio = tips / totalHours;
		console.log(totalHours, ratio);
		for (let i = 0; i < people.length; i++){
			let temp = people[i];
			check = (check) + (temp.hours * (ratio));
			temp.tips = temp.hours * (ratio);
		}		
		Update();
		let aCheck = document.getElementById("check");
		aCheck.innerHTML = "Total Hours = " + totalHours.toString() + "<br>Tip Ratio " +  ratio.toString() + "<br> Tips added by Employee " + check.toString();
	}
}

function swapFloat() {
	rounded = !rounded;
	CalculateTips();
}

function makeToInt(y) {
	if (rounded) {
		let ret = y.toFixed(0);
		return ret;
	}
	else {
		return y;
    }
}