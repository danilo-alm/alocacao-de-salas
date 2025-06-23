import { PartialType } from '@nestjs/swagger';

import { CreateTipoSalaDto } from './create-tipo-sala.dto';

export class UpdateTipoSalaDto extends PartialType(CreateTipoSalaDto) {}
