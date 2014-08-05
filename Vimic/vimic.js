(function(config) {
    var vimic = {};

    vimic.Maps = {
        demoMap: [
            '###############',
            '#.#....#....#.#',
            '#.#.#..#..#.#.#',
            '#...#.....#...#',
            '###############'
        ]
    };

    vimic.Tile = function(char, r, g, b) {
        "use strict";
        this.char = char;
        this.r = r;
        this.g = g;
        this.b = b;

        return {
            getChar: function() {
                return char;
            },
            setChar: function(char) {
                this.char = char;
            },
            setColor: function(r, g, b) {
                this.r = r;
                this.g = g;
                this.b = b;
            }
        };
    };

    vimic.Renderer = {
        init: function() {
            this.el = document.getElementById(config.gameElId);
            this.canvas = document.createElement("canvas");
            this.canvas.width = config.gameWidth;
            this.canvas.height = config.gameHeight;
            this.el.innerHTML = '';
            this.el.appendChild(this.canvas);

            this.render();
        },

        render: function() {
            var ctx = this.canvas.getContext('2d'),
                map = this.createMap(vimic.Maps.demoMap),
                xSize = this.canvas.width / map.length,
                xPos = xSize / 2,
                ySize = this.canvas.height / map[0].length,
                yPos = ySize / 2;

            for(var x = 0, xLen = map.length; x < xLen; x++) {
                for(var y = 0, yLen = map[0].length; y < yLen; y++) {
                    ctx.fillText(map[x][y].getChar(), x * xSize + xPos, y * ySize + yPos);
                }
            }
        },

        createMap: function(mapArray) {
            var width = mapArray[0].length,
                height = mapArray.length,
                map = new Array(width);

            for(var x = 0; x < width; x++) {
                map[x] = new Array([height]);
                for(var y = 0; y < height; y++) {
                    map[x][y] = new vimic.Tile(mapArray[y].charAt(x), 0, 0, 0);
                }
            }
            console.log(map);
            return map;
        }
    };

    vimic.Engine = {
        init: function() {
            this.attachEvents();
        },

        attachEvents: function() {
            document.onkeydown = function(e) {
                switch(e.keyCode) {
                    case 'enterCode':
                        break;
                }
            };
        }
    };

    vimic.Engine.init();
    vimic.Renderer.init();

}(VIMIC_CONFIG));
