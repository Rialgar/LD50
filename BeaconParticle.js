export default class BeaconParticle extends Phaser.GameObjects.Particles.Particle {
    static target = null;

    update(delta, step, processors) {
        if(BeaconParticle.target){
            const dx = BeaconParticle.target.x - this.x;
            const dy = BeaconParticle.target.y - this.y;
            const dSq = dx*dx + dy*dy;
            if(dSq < 10000){
                this.accelerationX = 0;
                this.accelerationY = 0;
                this.velocityX = 7*dx;
                this.velocityY = 7*dy;
            } else {
                this.accelerationX = 5*dx;
                this.accelerationY = 5*dy;
            }
        } else {
            this.accelerationX = 0;
            this.accelerationY = 0;
        }
        return super.update(delta, step, processors);
    }
}