export default function healthLevel(character) {
    if (character.health > 50) {
        return 'healthy';
    } if (character.health <= 50 && character.health > 15) {
        return 'wounded';
    };
    return 'critical';
}