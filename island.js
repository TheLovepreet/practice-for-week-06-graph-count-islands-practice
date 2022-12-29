function getNeighbors(row, col, matrix) {
  let neighbors = [];
  if(matrix[row-1] !== undefined){
    if(matrix[row-1][col] == 1){
      neighbors.push([(row-1),col]);
    }
    if(matrix[row-1][col-1] !== undefined){
      if(matrix[row-1][col-1] == 1){
        neighbors.push([(row-1),(col-1)]);
      }
    }
    if(matrix[row-1][col+1] !== undefined){
      if(matrix[row-1][col+1] == 1){
        neighbors.push([(row-1),(col+1)]);
      }
    }
  }
  if(matrix[row+1] !== undefined){
    if(matrix[row+1][col] == 1){
      neighbors.push([(row+1),(col)]);
    }
    if(matrix[row+1][col-1] !== undefined){
      if(matrix[row+1][col-1] == 1){
        neighbors.push([(row+1),(col-1)]);
      }
    }
    if(matrix[row+1][col+1] !== undefined){
      if(matrix[row+1][col+1] == 1){
        neighbors.push([(row+1),(col+1)]);
      }
    }
  }
  if(matrix[row][col-1] !== undefined){
    if(matrix[row][col-1] == 1){
      neighbors.push([(row),(col-1)]);
    }
  }
  if(matrix[row][col+1] !== undefined){
    if(matrix[row][col+1] == 1){
      neighbors.push([(row),(col+1)]);
    }
  }
  return neighbors;
  // Check top
  // Check top right
  // Check right
  // Check bottom right
  // Check bottom
  // Check bottom left
  // Check left
  // Check top left
  // Return neighbors
  
  // Your code here
}



function countIslands(matrix) {
  let count = 0;
  let visitedSet = new Set();
  let visited;
  let answer = [];
  for(let i = 0; i<matrix.length;i++){
    for(let j = 0; j< matrix[i].length;j++){
      if(matrix[i][j] == 1){
        if(visited == undefined){
          visited = traversing(0,0,matrix);
          visited.forEach((el) =>{
            visitedSet.add(el);
          })
          answer.push([0,0]);
          count++;
        }
        else if(visitedSet.has([i,j].toString()) == false){
          answer.push([i,j]);
          visited = traversing(i,j,matrix);
          visited.forEach((el) =>{
            visitedSet.add(el.toString());
          })
          count++;
        }
      }
    }
  }
  return answer.length;
  
  // Create a visited set to store visited nodes
  function traversing(row,col,matrix){
      let visited = new Set();
      let queue = [];
      let startNode = [row,col];
      queue.push(startNode);
      visited.add(startNode.toString());

      while(queue.length !== 0){
        let currentCoord = queue.shift();
        let currentRow = currentCoord[0];
        let currentCol = currentCoord[1];
        
        let neighbors = getNeighbors(currentRow,currentCol,matrix);
        neighbors.forEach((el) =>{
        if(visited.has(el.toString()) == false){
          visited.add(el.toString());
          queue.push(el);
        }
        })
      };
      let answer = [...visited];
      return answer;
    }
  }

  // Initialize count to 0
  // Iterate through all indices in matrix
    // If an index contains a 1 and has not been visited, 
    // increment island count and start traversing neighbors
      // DO THE THING (increment island count by 1)
      // Initialize a stack with current index
      // Add stringified version of current index to the visited set
      // While stack contains elements
        // Pop element from stack
        // Get valid neighbors of current element
        // Iterate over neigbors
          // If neighbor has not been visited
            // Add neighbor to stack
            // Mark neighbor as visited
  // Return island count
  
  // Your code here

// Uncomment the lines below for local testing
 /*const matrix = [
                 [1,1,1,0,0],
                 [0,1,1,0,1],
                 [0,1,1,0,1]
               ]

 //console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
 //console.log(getNeighbors(2,4, matrix)) // [[1,4]]

 const matrix2 = [
                     [1,1,1,0,1],
                     [0,0,0,0,1],
                     [1,0,0,1,0],
                 ]

 //console.log(countIslands(matrix)) // 2
 console.log(countIslands(matrix2)); // 3*/

module.exports = [countIslands, getNeighbors];