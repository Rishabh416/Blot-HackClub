const width = 134
setDocDimensions(width, 125)
const minBuildingHeight = 15
const maxBuildingHeight = 50
const spacingDistance = 10
const buildingWidth = 20

const pencil = new bt.Turtle();
pencil.down()

function building() {
  const buildingHeight = bt.randIntInRange(minBuildingHeight, maxBuildingHeight)
  pencil.forward(spacingDistance)
  pencil.left(90)
  pencil.forward(buildingHeight)
  pencil.right(90)
  pencil.forward(buildingWidth)
  pencil.right(90)
  pencil.forward(buildingHeight)
  pencil.left(90)
}

let numBuildings = 0

// generate buildings based on length of canvas
while (pencil.pos[0] < (width - buildingWidth - spacingDistance)) {
  building()
  numBuildings++
}

function door(buildingNo) {
  pencil.jump([(buildingNo * spacingDistance) + ((buildingNo - 1) * buildingWidth) + (buildingWidth / 2) - 2, 0])
  pencil.left(90)
  pencil.forward(7)
  pencil.right(90)
  pencil.forward(4)
  pencil.right(90)
  pencil.forward(7)
  pencil.left(90)
}

// generate doors for each building
for (let i = 0; i < numBuildings; i++) {
  door(i+1)
}

drawLines(pencil.lines())