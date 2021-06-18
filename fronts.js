class SLL {
     // constructor, other methods, removed for brevity
     addNoteToFront(value) {
        var newNode  = new SSLNode(value);
        if (this.head == null)
            this.head = newNode;
            return this;
    }
    newNode.next = this.head;
    this.head = newNode;
    return this;
    	
    }
 }

 class SLL {
     // constructor, other methods, removed for brevity
     addFront(value) {
    var newNode  = new SSLNode(value);
    if (this.head == null)
        this.head = newNode;
        return this;
}
newNode.next = this.head;
this.head = newNode;
return this;
    	
    }
 }

 class SLL {
    // constructor, other methods, removed for brevity
     front() {
        var newNode  = new SSLNode(value);
        if (this.head == null)
            this.head = newNode;
            return this;
    }
    newNode.next = this.head;
    this.head = newNode;
    return this;
    	
    }
 }

 var mySLL = new SLL();
 mySLL.addNodeToFront(10);
 mySLL.addNodeToFront(20);
 mySLL.addNodeToFront(40);
 mySLL.addNodeToFront(30).addNodeToFron(70);
 console.log(mySLL);
