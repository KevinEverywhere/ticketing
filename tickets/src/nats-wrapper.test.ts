import rewire from "rewire"
const nats_wrapper = rewire("./nats-wrapper")
const NatsWrapper = nats_wrapper.__get__("NatsWrapper")
// @ponicode
describe("connect", () => {
    let inst: any

    beforeEach(() => {
        inst = new NatsWrapper()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.connect("myDIV", "da7588892", "Www.GooGle.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.connect("myDIV", 12345, "http://base.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.connect("myDIV", 9876, "https://croplands.org/app/a/confirm?t=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.connect("myDIV", 9876, "https://twitter.com/path?abc")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst.connect("myDIV", 12345, "https://twitter.com/path?abc")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.connect("", "", "")
        }
    
        expect(callFunction).not.toThrow()
    })
})
