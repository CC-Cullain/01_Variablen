"use strict";

// var firstName = "Lukas";

/***** Variablen 01 *******/

/** 
 * 
 *  Block-Kommentar
 * 
*/

// Konsolen-Ausgaben
// console.log("Hi");
// console.log(firstName);

/***** 02 Deklaration + Wertzuweisung I *******/

// let firstName = "Lukas";
// console.log(firstName);

// let familyName = "Gedrat";
// console.log(familyName);

/***** 03 Deklaration + Wertzuweisung II *******/

// let firstName, familyName;

// firstName = "Lukas";
// familyName = "Gedrat";

// console.log(firstName + " " + familyName);

// let firstName, familyName;

// firstName = prompt("Bitte Vornamen eingeben");
// familyName = prompt("Bitte Nachnamen eingeben");

// console.log(firstName + " " + familyName);
// console.log(typeof firstName);

/* JS ist eine untypisierte Sprache! | untyped */

// let test;

// test = "Lukas";
// test = 5;
// test = false;

// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);

/***** 03a Konstanten *******/

// const  test = "Max";

// console.log("Inhalt: " + test);

/***** 04 Beispiel - Berechnung *******/

// Deklaration

const birthYearJohn = 2000; 
const birthYearMark = 1990;

let ageJohn = 23;
let ageMark = 33;

let date = new Date();
let jahr = date.getFullYear()
// console.log(jahr);

ageJohn = jahr - birthYearJohn;
ageMark = jahr - birthYearMark;

console.log("Alter John " + ageJohn);
console.log("Alter Mark " + ageMark);

// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);