import { createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';

import { FoodType } from '../../@types';
import Modal from '../Modal';
import Input from '../Input';

import { Form } from './styles';

interface ModalEditFoodProps{
  isOpen: boolean;
  editingFood: FoodType;
  setIsOpen: () => void;
  handleUpdateFood: (data: FoodType) => void;
}

export default function ModalEditFood({ 
  isOpen, 
  editingFood, 
  setIsOpen, 
  handleUpdateFood 
}: ModalEditFoodProps){

  const formRef = createRef<FormHandles>()

  async function handleSubmit(data: FoodType){
    handleUpdateFood(data);
    setIsOpen();
  };

  return(
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  )
}