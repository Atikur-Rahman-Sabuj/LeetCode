class LRUCache {
  capacity: number;
  map: Map<number, number>;

  constructor(capacity: number) {
      this.capacity = capacity;
      this.map = new Map();
  }

  get(key: number): number {
    const value = this.map.get(key);

    if (value === undefined) return -1;
          
    // Small hack to re-order keys: we remove the requested key and place it at the end
    this.map.delete(key);
    this.map.set(key, value);
    
    return value;
  }

  put(key: number, value: number): void {
    // remove last element to avoid overflow, only if it does not have 
    // the inserted key is a new key
    if (this.map.size >= this.capacity && !this.map.has(key)) {
        const firstKey = this.map.keys().next().value;
        this.map.delete(firstKey);
    }
    
    // Small hack to re-order keys: we remove the requested key and place it at the end
    this.map.delete(key);
    this.map.set(key, value);
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */