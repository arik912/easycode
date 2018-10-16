//1
function getAllNames(users) {
	return users.map(function (users) {
		if(users.first_name) {
			name = users.first_name;
		}

		return {
			name: name,
			length: name.length
		}
	});
}

getAllNames(users);

//2

function getTotalAmount(list, field) {
	var total = 0,
	index;
	
	for (index = list.length; index--; ) {
		isNaN(parseInt(list[index][field])) ? total += 0 : total += parseInt(list[index][field]);
	}
	
	return total;
}

document.write(getTotalAmount(workers, 'workers'));
