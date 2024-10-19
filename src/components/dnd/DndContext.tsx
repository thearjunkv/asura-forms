import { DndContext } from '@dnd-kit/core';

type TDndContext = {
	children: React.ReactNode;
};

export function DndContextWrapper({ children }: TDndContext) {
	return <DndContext>{children}</DndContext>;
}
