function hanoi(n, source, auxiliary, target) {
    // Total moves required is 2^n - 1
    let totalMoves = Math.pow(2, n) - 1;
    
    // If the number of disks is even, swap the auxiliary and target pegs
    if (n % 2 === 0) {
        [auxiliary, target] = [target, auxiliary];
    }

    // Simulate the moves
    for (let move = 1; move <= totalMoves; move++) {
        let from, to;

        // Determine the source and target pegs for the current move
        if (move % 3 === 1) {
            from = source;
            to = target;
        } else if (move % 3 === 2) {
            from = source;
            to = auxiliary;
        } else {
            from = auxiliary;
            to = target;
        }

        // Determine the disk to move
        let disk;
        if (move % 3 === 1) {
            disk = (move - 1) % n + 1; // Calculate which disk to move
        } else if (move % 3 === 2) {
            disk = (move - 1) % n + 1; // Same as above
        } else {
            disk = (move - 1) % n + 1; // Same as above
        }

        // Output the move
        console.log(`Move disk ${disk} from ${from} to ${to}`);
    }
}

 
// Example usage:
hanoi(3, 'P1', 'P2', 'P3'); // A, B, and C are the names of the pegs