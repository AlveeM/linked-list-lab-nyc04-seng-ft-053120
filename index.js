let collection = {rnadnm: {name: 'Alexandra', next: 'masjdrandm'},
    masjdrandm: {name: 'Kirstin', next: 'ntrandm'}, 
    ntrandm: {name: 'Juliet', next: null}
  }

function getName(node) {
  return node.name;
}

function headNode(linkedList, collection) {
  return collection[linkedList];
}

function next(node, collection) {
  return collection[node.next];
}

function nodeAt(idx, linkedList, collection) {
  let currentNode = headNode(linkedList, collection);
  let currentIdx = 0;

  while (currentIdx < idx) {
    currentNode = next(currentNode, collection);
    currentIdx++;
  }

  return currentNode;
}

function addressAt(idx, linkedList, collection) {
  if (idx === 0) return linkedList;
  const node = nodeAt(idx-1, linkedList, collection);
  return node.next;
}

function indexAt(node, collection, linkedList) {
  let currentIdx = 0;
  let currentNode = headNode(linkedList, collection);

  while (currentNode !== node) {
    currentIdx += 1;
    currentNode = next(currentNode, collection);
  }

  return currentIdx;
}

function insertNodeAt(idx, nodeAddress, linkedList, collection) {
  const prevNode = nodeAt(idx-1, linkedList, collection);
  const nextNode = nodeAt(idx, linkedList, collection);
  const nextNodeAddress = addressAt(nextNode, linkedList, collection);

  prevNode.next = nodeAddress;
  const newNode = collection[nodeAddress];
  newNode.next = nextNodeAddress;
}

function deleteNodeAt(idx, linkedList, collection) {
  let currentNode = headNode(linkedList, collection);
  let prevNode;
  let currentIdx = 0;

  while (currentIdx < idx) {
    prevNode = currentNode;
    currentNode = next(currentNode, collection);
    currentIdx++;
  }

  prevNode.next = currentNode.next;
}