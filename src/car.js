class Car {
	constructor(boundSize) {
		this.x = null;
		this.y = null;
		this.direction = null;
		this.boundSize = boundSize;
	}

	report() {
		return [this.x, this.y, this.direction];
	}

	place(x, y, direction) {
		if (x >= 0 && x < this.boundSize && y >= 0 && y < this.boundSize) {
			this.x = x;
			this.y = y;
			this.direction = direction;
		}
	}

	left() {
		switch (this.direction) {
			case 'NORTH':
				this.direction = 'WEST';
				return;
			case 'WEST':
				this.direction = 'SOUTH';
				return;
			case 'SOUTH':
				this.direction = 'EAST';
				return;
			case 'EAST':
				this.direction = 'NORTH';
				return;
		}
	}

	right() {
		switch (this.direction) {
			case 'NORTH':
				this.direction = 'EAST';
				return;
			case 'WEST':
				this.direction = 'NORTH';
				return;
			case 'SOUTH':
				this.direction = 'WEST';
				return;
			case 'EAST':
				this.direction = 'SOUTH';
				return;
		}
	}

	move() {
		switch (this.direction) {
			case 'NORTH':
				if (this.y + 1 < this.boundSize) this.y++;
				return;
			case 'SOUTH':
				if (this.y - 1 >= 0) this.y--;
				return;
			case 'EAST':
				if (this.x + 1 < this.boundSize) this.x++;
				return;
			case 'WEST':
				if (this.x - 1 >= 0) this.x--;
				return;
		}
	}
}

module.exports = Car;
