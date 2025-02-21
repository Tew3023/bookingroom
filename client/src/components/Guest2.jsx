import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { X } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAdult, setChildren } from '../store/counterSlice'; 

export default function Guest2({ toggle }) {
  const dispatch = useDispatch();
  const adult = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [adults, setAdults] = useState(1);
  const [children, setChild] = useState(1);   

  const adultsChange = (e) => {
    setAdults(Number(e.target.value)); 
  };

  const childrenChange = (e) => {
    setChild(Number(e.target.value)); 
  };

  const confirmData = () => {
    if(!adults || !children){
      return
    }
    dispatch(setAdult(adults));       
    dispatch(setChildren(children));
    toggle()
  };

  return (
    <div className="fixed inset-0 bg-black/25 flex items-center justify-center z-50 ">
      <div className="bg-white p-6 text-black absolute w-2/5 space-y-3 rounded-sm">
        <div className="flex justify-end">
          <X onClick={toggle} className="h-5 w-5 cursor-pointer" />
        </div>
        <div className="text-center font-semibold">GUESTS & ROOMS</div>
        <div className="grid grid-cols-2 gap-10">
          <div className="text-sm text-center">
            <p>ADULT</p>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <NativeSelect
                  value={adults}
                  onChange={adultsChange}
                  inputProps={{
                    name: "adults",
                    id: "uncontrolled-native",
                  }}
                >
                  {adult.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </NativeSelect>
              </FormControl>
            </Box>
          </div>
          <div className="text-sm text-center">
            <p>CHILDREN</p>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <NativeSelect
                  value={children}
                  onChange={childrenChange}
                  inputProps={{
                    name: "children",
                    id: "uncontrolled-native",
                  }}
                >
                  {adult.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </NativeSelect>
              </FormControl>
            </Box>
          </div>
        </div>
        <div className="flex justify-center">
          <button onClick={confirmData} className="bg-black px-4 py-2 text-white">
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
}
