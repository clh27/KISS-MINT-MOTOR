declare const enum MotorPin {
    //% block="P0"
    P0 = 0,   // edge connector 0
    //% block="P1"
    P1 = 1,    // edge connector 1
    //% block="P2"
    P2 = 2,    // edge connector 2
    //% block="P3"
    P3 = 3,
    //% block="C16"
    C16 = 4,    // edge connector 16
    //% block="C17"
    C17 = 5,    // edge connector 17
    //% block="C18"
    C18 = 6,    // edge connector 18
    //% block="C19"
    C19 = 7,    // edge connector 19
};




declare const enum MyMotor {
    //% block="A"
    A = 0,
    //% block="B"
    B = 1,
    //% block="A+B"
    Ab = 2,
}
declare const enum Richtung {
    //% block="Vor"
    V = 0,
    //% block="Zurück"
    R = 1,
    //% block="Aus"
    O = 2,
}

/**
 * Benutzerdefinierte Blöcke
 */
//% color=#F99B1C icon="\uf1b9"
namespace KissMintMotor {

    /** 
         * Mit diesem Block kann eine doppel H-Brücke (vgl. L293D) über die PIN's P0, P1, P1, P1 angesteuert werden.
         * Verbinde: 
         * P0 mit IN1
         * P1 mit IN2
         * P1 mit IN3
         * P1 mit IN4
         * @param M wähle deinen Motor
         * @param R wähle die Richtung des Motors
         */
    //% block
    export function DigitalMotor(M: MyMotor, R: Richtung) {


        if (M == 0 && R == 0) {

            pins.digitalWritePin(DigitalPin.P0, 1)
            pins.digitalWritePin(DigitalPin.P1, 0)

        }

        if (M == 0 && R == 1) {
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P1, 1)

        }
        if (M == 0 && R == 2) {
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P1, 0)

        }

        if (M == 1 && R == 0) {

            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P1, 0)
        }

        if (M == 1 && R == 1) {

            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P1, 1)
        }
        if (M == 1 && R == 2) {

            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P1, 0)
        }

        if (M == 2 && R == 0) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P1, 0)
        }

        if (M == 2 && R == 1) {
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P1, 1)
        }
        if (M == 2 && R == 2) {
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P1, 0)
        }


    }



    /** 
     * 
     * Mit diesem Block kann ein Motor an einer doppel H-Brücke (vgl. L293D) über freigewählte PIN's gesteuert werden.
     * @param R wähle die Richtung des Motors
     * @param A1 wähle den Anschluss1 für deinen Motor
     * @param A2 wähle den Anschluss2 für deinen Motor
     * 
      */
    //% block
    export function Motor_A_PinWahl(R: Richtung, A1: MotorPin, A2: MotorPin) {
        let pinlist: DigitalPin[] = [DigitalPin.P0, DigitalPin.P1, DigitalPin.P2, DigitalPin.P3, DigitalPin.C16, DigitalPin.C17, DigitalPin.C18, DigitalPin.C19]


        if (R == 0) {
            pins.digitalWritePin(pinlist[A1], 1)
            pins.digitalWritePin(pinlist[A2], 0)

        }
        else if (R == 1) {
            pins.digitalWritePin(pinlist[A1], 0)
            pins.digitalWritePin(pinlist[A2], 1)

        }
        else if (R == 2) {
            pins.digitalWritePin(pinlist[A1], 0)
            pins.digitalWritePin(pinlist[A2], 0)

        }


    }



    /** 
      * 
      * Mit diesem Block kann ein Motor an einer doppel H-Brücke (vgl. L293D) über freigewählte PIN's gesteuert werden.
      * @param R wähle die Richtung des Motors
      * @param A1 wähle den Anschluss1 für deinen Motor
      * @param A2 wähle den Anschluss2 für deinen Motor
      * 
       */
    //% block
    export function Motor_B_PinWahl(R: Richtung, B1: MotorPin, B2: MotorPin) {
        let pinlist: DigitalPin[] = [DigitalPin.P0, DigitalPin.P1, DigitalPin.P2, DigitalPin.P3, DigitalPin.C16, DigitalPin.C17, DigitalPin.C18, DigitalPin.C19]

        if (R == 0) {
            pins.digitalWritePin(pinlist[B1], 1)
            pins.digitalWritePin(pinlist[B2], 0)

        }
        else if (R == 1) {
            pins.digitalWritePin(pinlist[B1], 0)
            pins.digitalWritePin(pinlist[B2], 1)

        }
        else if (R == 2) {
            pins.digitalWritePin(pinlist[B1], 0)
            pins.digitalWritePin(pinlist[B2], 0)

        }


    }




    /** 
     * Dieser Block steuert einen Schrittmotor z.B. 28BYJ-48 über eine H-Brücke(L293D) oder Darlington-Array(ULN2003)
     * Wie viele Schritte = 1 Umdrehung entspricht ist vom Motor abhängig
     * @param S wähle um wieviele Schritte sich der motor drehen soll
     * @param R wähle die Richtung des Motors
     
     * Verbinde:
         * P0 mit IN1
         * P1 mit IN2
         * P1 mit IN3
         * P1 mit IN4
     */
    //% block
    export function SchrittMotor(R: Richtung, S: number) {
        let i = 0;
        if (R == 0) {
            while (i < S) {
                i++
                pins.digitalWritePin(DigitalPin.P0, 1)
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.digitalWritePin(DigitalPin.P1, 0)
                basic.pause(2)
                pins.digitalWritePin(DigitalPin.P0, 0)
                pins.digitalWritePin(DigitalPin.P1, 1)
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.digitalWritePin(DigitalPin.P1, 0)
                basic.pause(2)
                pins.digitalWritePin(DigitalPin.P0, 0)
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.digitalWritePin(DigitalPin.P1, 1)
                pins.digitalWritePin(DigitalPin.P1, 0)
                basic.pause(2)
                pins.digitalWritePin(DigitalPin.P0, 0)
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.digitalWritePin(DigitalPin.P1, 1)
                basic.pause(2)
                pins.digitalWritePin(DigitalPin.P0, 0)
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.digitalWritePin(DigitalPin.P1, 0)

            }
        }

        else if (R == 1) {
            while (i < S) {

                i++
                pins.digitalWritePin(DigitalPin.P0, 0)
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.digitalWritePin(DigitalPin.P1, 1)
                basic.pause(2)
                pins.digitalWritePin(DigitalPin.P0, 0)
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.digitalWritePin(DigitalPin.P1, 1)
                pins.digitalWritePin(DigitalPin.P1, 0)
                basic.pause(2)
                pins.digitalWritePin(DigitalPin.P0, 0)
                pins.digitalWritePin(DigitalPin.P1, 1)
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.digitalWritePin(DigitalPin.P1, 0)
                basic.pause(2)
                pins.digitalWritePin(DigitalPin.P0, 1)
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.digitalWritePin(DigitalPin.P1, 0)
                basic.pause(2)
                pins.digitalWritePin(DigitalPin.P0, 0)
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.digitalWritePin(DigitalPin.P1, 0)
            }

        }




    }

}
 