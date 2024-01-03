// Some useful functions

function get_scale(key){
    switch(key){
        case C_MAJOR :
        case A_MINOR :
            return [C,NULL,D,NULL,E,F,NULL,G,NULL,A,NULL,B,REST];
            //break;
        case G_MAJOR :
        case E_MINOR :
            return [C,NULL,D,NULL,E,F_SHARP,NULL,G,NULL,A,NULL,B,REST];
            //break;
        case D_MAJOR :
        case B_MINOR :
            return [C_SHARP,NULL,D,NULL,E,F_SHARP,NULL,G,NULL,A,NULL,B,REST];
            //break;
        case A_MAJOR :
        case F_SHARP_MINOR :
            return [C_SHARP,NULL,D,NULL,E,F_SHARP,NULL,G_SHARP,NULL,A,NULL,B,REST];
            //break;
        case E_MAJOR :
        case C_SHARP_MINOR :
            return [C_SHARP,NULL,D_SHARP,NULL,E,F_SHARP,NULL,G_SHARP,NULL,A,NULL,B,REST];
            //break;
        case B_MAJOR :
        case G_SHARP_MINOR :
            return [C_SHARP,NULL,D_SHARP,NULL,E,F_SHARP,NULL,G_SHARP,NULL,A_SHARP,NULL,B,REST];
            //break;
        case F_SHARP_MAJOR :
        case D_SHARP_MINOR :
            return [C_SHARP,NULL,D_SHARP,NULL,E_SHARP,F_SHARP,NULL,G_SHARP,NULL,A_SHARP,NULL,B,REST];
            //break;
        case C_SHARP_MAJOR :
        case A_SHARP_MINOR :
            return [C_SHARP,NULL,D_SHARP,NULL,E_SHARP,F_SHARP,NULL,G_SHARP,NULL,A_SHARP,NULL,B_SHARP,REST];
            //break;
        case F_MAJOR :
        case D_MINOR :
            return [C,NULL,D,NULL,E,F,NULL,G,NULL,A,NULL,B_FLAT,REST];
            //break;
        case B_FLAT_MAJOR :
        case G_MINOR :
            return [C,NULL,D,NULL,E_FLAT,F,NULL,G,NULL,A,NULL,B_FLAT,REST];
            //break;
        case E_FLAT_MAJOR :
        case C_MINOR :
            return [C,NULL,D,NULL,E_FLAT,F,NULL,G,NULL,A_FLAT,NULL,B_FLAT,REST];
            //break;
        case A_FLAT_MAJOR :
        case F_MINOR :
            return [C,NULL,D_FLAT,NULL,E_FLAT,F,NULL,G,NULL,A_FLAT,NULL,B_FLAT,REST];
            //break;
        case D_FLAT_MAJOR :
        case B_FLAT_MINOR :
            return [C,NULL,D_FLAT,NULL,E_FLAT,F,NULL,G_FLAT,NULL,A_FLAT,NULL,B_FLAT,REST];
            //break;
        case G_FLAT_MAJOR :
        case E_FLAT_MINOR :
            return [C_FLAT,NULL,D_FLAT,NULL,E_FLAT,F,NULL,G_FLAT,NULL,A_FLAT,NULL,B_FLAT,REST];
            //break;
        case C_FLAT_MAJOR :
        case A_FLAT_MINOR :
            return [C_FLAT,NULL,D_FLAT,NULL,E_FLAT,F_FLAT,NULL,G_FLAT,NULL,A_FLAT,NULL,B_FLAT,REST];
            //break;
        default :
            return [C,C_SHARP,D,D_SHARP,E,F,F_SHARP,G,G_SHARP,A,A_SHARP,B,REST];
            //break;
    }
}