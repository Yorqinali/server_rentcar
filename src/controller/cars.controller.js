import { Cars } from "../model/index.model.js";

export const carsGet = async (req, res) => {
  try {
    const data = await Cars.findAll();
    return res.send(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const carscreate =  async (req, res) => {
  try {
  
    if (!req.file) {
      return res.status(400).json({ message: "Fayl yuklanmadi" });
    }

    const {car_name, rent_price, fuel, motor_size, color, brand } = req.body; 
    const image = req.file.filename; 

  
    const car = await Cars.create({
      car_name, rent_price, fuel, motor_size, color, brand, image
    });

    res.status(201).json({ message: "Mashina muvaffaqiyatli qo'shildi", data: car });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server xatosi" });
  }
}

export const carsdelete = async (req, res) => {
  try {
    const { cars_id } = req.params; 
    

    await Cars.destroy({
      where: {
        cars_id,
      },
  }); 

    return res.status(200).json({ message: "deleted" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Server xatosi" });
  }
};
