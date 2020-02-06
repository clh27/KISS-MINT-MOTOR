
/**
 * Nutze diese Datei für benutzerdefinierte Funktionen und Blöcke.
 * Weitere Informationen unter https://makecode.calliope.cc/blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}


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
//% color=#F99B1C icon="\uf193"
namespace KissMintMotor {
    /** 
         * Mit diesem Block kann eine doppel H-Brücke (vgl. L293D) über die PIN's C6, C7, C8, C9 angesteuert werden.
         * Verbinde: 
         * C6 mit IN1
         * C7 mit IN2
         * C8 mit IN3
         * C8 mit IN4
         */
    //% block
    export function DigitalMotor(M: MyMotor, R: Richtung) {


        if (M == 0 && R == 0) {

            pins.digitalWritePin(DigitalPin.C6, 1)
            pins.digitalWritePin(DigitalPin.C7, 0)
            pins.digitalWritePin(DigitalPin.C8, 0)
            pins.digitalWritePin(DigitalPin.C9, 0)
        }

        else if (M == 0 && R == 1) {
            pins.digitalWritePin(DigitalPin.C6, 0)
            pins.digitalWritePin(DigitalPin.C7, 1)
            pins.digitalWritePin(DigitalPin.C8, 0)
            pins.digitalWritePin(DigitalPin.C9, 0)
        }
        else if (M == 0 && R == 2) {
            pins.digitalWritePin(DigitalPin.C6, 0)
            pins.digitalWritePin(DigitalPin.C7, 0)
            pins.digitalWritePin(DigitalPin.C8, 0)
            pins.digitalWritePin(DigitalPin.C9, 0)
        }

        else if (M == 1 && R == 0) {
            pins.digitalWritePin(DigitalPin.C6, 0)
            pins.digitalWritePin(DigitalPin.C7, 0)
            pins.digitalWritePin(DigitalPin.C8, 1)
            pins.digitalWritePin(DigitalPin.C9, 0)
        }

        else if (M == 1 && R == 1) {
            pins.digitalWritePin(DigitalPin.C6, 0)
            pins.digitalWritePin(DigitalPin.C7, 0)
            pins.digitalWritePin(DigitalPin.C8, 0)
            pins.digitalWritePin(DigitalPin.C9, 1)
        }
        else if (M == 1 && R == 2) {
            pins.digitalWritePin(DigitalPin.C6, 0)
            pins.digitalWritePin(DigitalPin.C7, 0)
            pins.digitalWritePin(DigitalPin.C8, 0)
            pins.digitalWritePin(DigitalPin.C9, 0)
        }

        else if (M == 2 && R == 0) {
            pins.digitalWritePin(DigitalPin.C6, 1)
            pins.digitalWritePin(DigitalPin.C7, 0)
            pins.digitalWritePin(DigitalPin.C8, 1)
            pins.digitalWritePin(DigitalPin.C9, 0)
        }

        else if (M == 2 && R == 1) {
            pins.digitalWritePin(DigitalPin.C6, 0)
            pins.digitalWritePin(DigitalPin.C7, 1)
            pins.digitalWritePin(DigitalPin.C8, 0)
            pins.digitalWritePin(DigitalPin.C9, 1)
        }
        else if (M == 2 && R == 2) {
            pins.digitalWritePin(DigitalPin.C6, 0)
            pins.digitalWritePin(DigitalPin.C7, 0)
            pins.digitalWritePin(DigitalPin.C8, 0)
            pins.digitalWritePin(DigitalPin.C9, 0)
        }


    }
    declare const enum PIN {


    }


    /** 
      Mit diesem Block kann eine doppel H-Brücke (vgl. L293D) über freigewählte PIN's gesteuert werden.
      */
    //% block
    export function DigitalMotor_PinWahl(M: MyMotor, R: Richtung, A1: DigitalPin, A2: DigitalPin, B1: DigitalPin, B2: DigitalPin) {

        if (M == 0 && R == 0) {
            pins.digitalWritePin(A1, 1)
            pins.digitalWritePin(A2, 0)
            pins.digitalWritePin(B1, 0)
            pins.digitalWritePin(B2, 0)
        }
        else if (M == 0 && R == 1) {
            pins.digitalWritePin(A1, 0)
            pins.digitalWritePin(A2, 1)
            pins.digitalWritePin(B1, 0)
            pins.digitalWritePin(B2, 0)
        }
        else if (M == 0 && R == 2) {
            pins.digitalWritePin(A1, 0)
            pins.digitalWritePin(A2, 0)
            pins.digitalWritePin(B1, 0)
            pins.digitalWritePin(B2, 0)
        }
        else if (M == 1 && R == 0) {
            pins.digitalWritePin(A1, 0)
            pins.digitalWritePin(A2, 0)
            pins.digitalWritePin(B1, 1)
            pins.digitalWritePin(B2, 0)
        }
        else if (M == 1 && R == 1) {
            pins.digitalWritePin(A1, 0)
            pins.digitalWritePin(A2, 0)
            pins.digitalWritePin(B1, 0)
            pins.digitalWritePin(B2, 1)
        }
        else if (M == 1 && R == 2) {
            pins.digitalWritePin(A1, 0)
            pins.digitalWritePin(A2, 0)
            pins.digitalWritePin(B1, 0)
            pins.digitalWritePin(B2, 0)
        }

        else if (M == 2 && R == 0) {
            pins.digitalWritePin(A1, 1)
            pins.digitalWritePin(A2, 0)
            pins.digitalWritePin(B1, 1)
            pins.digitalWritePin(B2, 0)
        }
        else if (M == 2 && R == 1) {
            pins.digitalWritePin(A1, 0)
            pins.digitalWritePin(A2, 1)
            pins.digitalWritePin(B1, 0)
            pins.digitalWritePin(B2, 1)
        }
        else if (M == 2 && R == 2) {
            pins.digitalWritePin(A1, 0)
            pins.digitalWritePin(A2, 0)
            pins.digitalWritePin(B1, 0)
            pins.digitalWritePin(B2, 0)
        }


    }
    /** 
     * Dieser Block steuert einen Schrittmotor z.B. 28BYJ-48 über eine H-Brücke(L293D) oder Darlington-Array(ULN2003)
     * Wie viele Schritte = 1 Umdrehung entspricht ist vom Motor abhängig
    
     * Verbinde:
         * C6 mit IN1
         * C7 mit IN2
         * C8 mit IN3
         * C8 mit IN4
     */
    //% block
    export function SchrittMotor(R: Richtung, S: number) {
        let i = 0;
        if (R == 0) {
            while (i < S) {
                i++
                pins.digitalWritePin(DigitalPin.C6, 1)
                pins.digitalWritePin(DigitalPin.C7, 0)
                pins.digitalWritePin(DigitalPin.C8, 0)
                pins.digitalWritePin(DigitalPin.C9, 0)
                basic.pause(2)
                pins.digitalWritePin(DigitalPin.C6, 0)
                pins.digitalWritePin(DigitalPin.C7, 1)
                pins.digitalWritePin(DigitalPin.C8, 0)
                pins.digitalWritePin(DigitalPin.C9, 0)
                basic.pause(2)
                pins.digitalWritePin(DigitalPin.C6, 0)
                pins.digitalWritePin(DigitalPin.C7, 0)
                pins.digitalWritePin(DigitalPin.C8, 1)
                pins.digitalWritePin(DigitalPin.C9, 0)
                basic.pause(2)
                pins.digitalWritePin(DigitalPin.C6, 0)
                pins.digitalWritePin(DigitalPin.C7, 0)
                pins.digitalWritePin(DigitalPin.C8, 0)
                pins.digitalWritePin(DigitalPin.C9, 1)
                basic.pause(2)
                pins.digitalWritePin(DigitalPin.C6, 0)
                pins.digitalWritePin(DigitalPin.C7, 0)
                pins.digitalWritePin(DigitalPin.C8, 0)
                pins.digitalWritePin(DigitalPin.C9, 0)

            }
        }

        else if (R == 1) {
            while (i < S) {
                i++
                pins.digitalWritePin(DigitalPin.C6, 0)
                pins.digitalWritePin(DigitalPin.C7, 0)
                pins.digitalWritePin(DigitalPin.C8, 0)
                pins.digitalWritePin(DigitalPin.C9, 1)
                basic.pause(2)
                pins.digitalWritePin(DigitalPin.C6, 0)
                pins.digitalWritePin(DigitalPin.C7, 0)
                pins.digitalWritePin(DigitalPin.C8, 1)
                pins.digitalWritePin(DigitalPin.C9, 0)
                basic.pause(2)
                pins.digitalWritePin(DigitalPin.C6, 0)
                pins.digitalWritePin(DigitalPin.C7, 1)
                pins.digitalWritePin(DigitalPin.C8, 0)
                pins.digitalWritePin(DigitalPin.C9, 0)
                basic.pause(2)
                pins.digitalWritePin(DigitalPin.C6, 1)
                pins.digitalWritePin(DigitalPin.C7, 0)
                pins.digitalWritePin(DigitalPin.C8, 0)
                pins.digitalWritePin(DigitalPin.C9, 0)
                basic.pause(2)
                pins.digitalWritePin(DigitalPin.C6, 0)
                pins.digitalWritePin(DigitalPin.C7, 0)
                pins.digitalWritePin(DigitalPin.C8, 0)
                pins.digitalWritePin(DigitalPin.C9, 0)
            }

        }




    }

}
 