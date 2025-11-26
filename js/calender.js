function calender() {
	'use strict';
	let date = new Date();
	const MONTH_DAYS = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	const WEEK = new Array("Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat");
	let year = date.getFullYear();
	let today = date.getDate();

	if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
		MONTH_DAYS[1] = 29;
	}
	let thisMonthDays = MONTH_DAYS[date.getMonth()];
	date.setDate(1);
	let Startday = date.getDay();

	document.write("<table border='1'>");
	document.write(`<caption>${year}年 ${date.getMonth() + 1}月</caption>`);
	document.write("<tr>");
	for (let i in WEEK) {
		document.write(`<th>${WEEK[i]}</th>`);
	}
	document.write("</tr>");
	document.write("<tr>");
	let col = 0
	for (let i = 0; i < Startday; i++) {
		document.write("<td>&nbsp;</td>");
		col++;
	}
	for (let i = 1; i <= thisMonthDays; i++) {
		if (i == today) {
			document.write(`<td class="today">${i}</td>`);
		} else if (col == 0) {
			document.write(`<td class="sat">${i}</td>`);
		} else {
			document.write(`<td class="sun">${i}</td>`);
		}

		/*
		document.write(`<td class="sun">${}<td>`);
		
		document.write(`<td class="sat">${}<td>`);
		*/



		col++;
		if ((i != thisMonthDays) && (col == 7)) {
			document.write("</tr><tr>");
			col = 0;
		}
	}
	for (let i = 1; i <= 7 - col; i++) {
		document.write("<td>&nbsp;</td>");
	}
	document.write("</tr></table>");

}

