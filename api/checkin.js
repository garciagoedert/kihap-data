export default function handler(req, res) {
    // Armazena os dados do check-in no localStorage
    var checkinData = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone
    };
    localStorage.setItem('checkinData', JSON.stringify(checkinData));
    res.status(200).json({ message: 'Dados do check-in armazenados com sucesso!' });
  }
  