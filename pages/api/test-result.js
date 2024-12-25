let lastResult = null;  // Deklarasi variabel di luar handler

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { result } = req.body;
    console.log('Received test result:', result);  // Debug dengan console.log

    // Simpan hasil POST request
    lastResult = result;

    res.status(200).json({ message: 'Test result received', result });
  } else if (req.method === 'GET') {
    console.log('Returning lastResult:', lastResult);  // Debug untuk GET request

    if (lastResult) {
      res.status(200).json({ result: lastResult });
    } else {
      res.status(404).json({ message: 'No test result available' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
