
    //% color="#aa00ff" iconWidth=50 iconHeight=40
    namespace yeezb{
        
    //% block="网络摄像头[k]" blockType="command"
    //% k.shadow="dropdown" k.options="k" 
    export function myBlock0(parameter: any, block: any) {
    let k= parameter.k.code
    Generator.addInclude("myBlock474",`#include "unihiker_k10_webcam.h"`)
    Generator.addObject("myBlock8462",`unihiker_k10_webcam webcam`,"")
    Generator.addCode(`webcam.${k}Webcam();`)
            }
    }
    