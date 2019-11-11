const botCar = require('../src/car');

describe('Car', function () {
  let car;
  const boundSize = 5;

  beforeEach(() => {
    car = new botCar(boundSize);
  });

  describe('report command', function () {
    it('reports the current position and direction', function () {
      const [x, y, direction] = car.report();
      expect([x, y]).toEqual([null, null]);
      expect(direction).toEqual(null)
    });
  });

  describe('place command', function () {
    it('puts the robot in a position', function () {
      car.place(0, 0, 'NORTH');

      expect(car.report()).toEqual([0, 0, 'NORTH'])
    });

    describe('when the placement position is outside the boundary', function () {
      beforeEach(() => {
        car.place(boundSize, 0, 'SOUTH');
      });

      it('does not change the robot position', function () {
        expect(car.report()).toEqual([null, null, null]);
      });

      it('only places the car in valid positions', function () {
        car.place(2, 4, 'WEST');
        car.place(2, boundSize, 'EAST');

        expect(car.report()).toEqual([2, 4, 'WEST']);
      });

      it('ignores subsequent move command', function () {
        car.move();

        expect(car.report()).toEqual([null, null, null]);
      });

      it('ignores subsequent left command', function () {
        car.left();

        expect(car.report()).toEqual([null, null, null]);
      });

      it('ignores subsequent right command', function () {
        car.right();

        expect(car.report()).toEqual([null, null, null]);
      });

      describe('when a valid place command is issued', function () {
        beforeEach(() => {
          car.place(0, 0, 'NORTH');
        });
        it('respects the next valid place command', function () {
          expect(car.report()).toEqual([0, 0, 'NORTH']);
        });

        it('runs the subsequent commands', function () {
          car.left();
          car.move();
          car.right();
          car.right();
          car.move();

          expect(car.report()).toEqual([1, 0, 'EAST']);
        });
      });
    });
  });

  describe('left command', function () {
    it('rotates the robot 90 degrees counter clockwise', function () {
      ['NORTH', 'SOUTH', 'WEST', 'EAST'].forEach((direction, index) => {
        car.place(0, 0, direction);
        car.left();

        expect(car.report()).toEqual([0, 0, ['WEST', 'EAST', 'SOUTH', 'NORTH'][index]]);
      });
    });
  });

  describe('right command', function () {
    it('rotates the robot 90 degrees clockwise', function () {
      ['NORTH', 'SOUTH', 'WEST', 'EAST'].forEach((direction, index) => {
        car.place(0, 0, direction);
        car.right();

        expect(car.report()).toEqual([0, 0, ['EAST', 'WEST', 'NORTH', 'SOUTH'][index]]);
      });
    });
  });

  describe('move command', function () {
    it('moves the robot one unit forward in its current direction', function () {
      [
        { i: [0, 0, 'NORTH'], o: [0, 1, 'NORTH'] },
        { i: [0, boundSize - 1, 'NORTH'], o: [0, boundSize - 1, 'NORTH'] },
        { i: [0, boundSize - 1, 'SOUTH'], o: [0, boundSize - 2, 'SOUTH'] },
        { i: [0, 0, 'SOUTH'], o: [0, 0, 'SOUTH'] },
        { i: [0, 1, 'SOUTH'], o: [0, 0, 'SOUTH'] },
        { i: [1, 0, 'EAST'], o: [2, 0, 'EAST'] },
        { i: [boundSize - 1, 0, 'EAST'], o: [boundSize - 1, 0, 'EAST'] },
        { i: [boundSize - 1, 0, 'WEST'], o: [boundSize - 2, 0, 'WEST'] },
        { i: [0, 0, 'WEST'], o: [0, 0, 'WEST'] },
      ].forEach(set => {
        const input = set.i;
        car.place(input[0], input[1], input[2]);
        car.move();

        const output = set.o;
        expect(car.report()).toEqual([output[0], output[1], output[2]]);
      });
    });
  });
});