var node = [
    {id:1,parentId:null},
    {id:2,parentId:1},
    {id:2,parentId:1},
    {id:4,parentId:null},
    {id:5,parentId:4},
]


function Node(id,parentId,children){
    this.id = id
    this.parentId = null
    this.children = []
}

function insert(node){
    var tree = []
    node.forEach(item=>{
        if(item.parentId == null){
            var root = new Node(item.id)
            tree.push(root)
        }
    })
    function insertChild(parent,child){
        
            if(parent.id === child.parentId){
                item.children.push(new Node(child.id,child.parentId))
            }else{
                insertChild()
            }
        
    }
    tree.forEach(parent=>{
        node.forEach(item=>{
            if(parent.id === item.parentId){
                parent.children.push(new Node(item.id,item.parentId))
            }
        })
    })
    return tree
}

console.log(insert(node))


//网上
var sortNewArr = sortArr(arr, [], 0);
function sortArr(arr, newArr, parentId) {
  var tempArr = [];
  arr.forEach((item, index) => {
    if (item.parentId === parentId) {
      tempArr.push(item);
    }
  });
  if (newArr.length === 0) {
    newArr = tempArr;
  } else {
    newArr.forEach(item => {
      if (item.children) {
        sortArr(arr, item.children, parentId);
      }
      if (item.id === parentId) {
        item.children = tempArr;
      }
    });
  }
  parentId++;
  if (parentId > 6) {
    return;
  }
  sortArr(arr, newArr, parentId);
  return newArr;
}