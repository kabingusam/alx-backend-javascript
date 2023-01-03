export function createInt8TypedArray(length, position, value) {
    if (position >= length){
        throw new Error("Position outside range")
    }
    const buffer = new Dataview(new ArrayBuffer(length), 0, length);
    buffer.setInt8(position, value)
    return buffer;
}
