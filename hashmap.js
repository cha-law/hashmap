class HashMap {
    constructor() {
        this.bucket = Array(16).fill(null);
        this.loadFactor = null;
        this.capacity = null;
        this.amount = 0;
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * this.hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    set(key, value) {
        key = hash(key);
        if (this.bucket.find(key)) {
            bucket.find(key).value = value;
            return;
        }
        if (this.amount / this.capacity >= 0.75) {
            resize();
        }
    }
}

class Node {
    constructor() {
        this.key = null;
        this.value = null;
    }
}