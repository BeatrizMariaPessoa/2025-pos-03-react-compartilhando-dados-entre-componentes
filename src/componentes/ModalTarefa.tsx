import { useState } from 'react';
import dados, { TarefaInterface } from "@/data";


interface ModalTarefaProps{
  onClose: () => void;
}

export default function ModalTarefa({ onClose }: ModalTarefaProps) {
  const [titulo, setTitulo] = useState('');
  const [tarefas, setTarefas] = useState<TarefaInterface[]>([]);

  return (
    <>
      <h1>To tentando add</h1>
      <input
        value={titulo}
        onChange={e => setTitulo(e.target.value)}
      />
      <button onClick={() => {
        setTarefas([
          ...tarefas,
          { id: nextId++, title: titulo }
        ]);
      }}>Add</button>
      <button onClick={onClose}>Fechar</button>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa.id}>{tarefa.title}</li>
        ))}
      </ul>
    </>
  );
}
